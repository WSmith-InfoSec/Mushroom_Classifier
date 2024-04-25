function populateEdible()
{
	let input1 = document.getElementById('box1');
	let input2 = document.getElementById('box2');
	let input3 = document.getElementById('box3');
	let input4 = document.getElementById('box4');
	let input5 = document.getElementById('box5');
	let input6 = document.getElementById('box6');
	let input7 = document.getElementById('box7');
	let input8 = document.getElementById('box8');
	
	input1.value = "426";
	input2.value = "6";
	input3.value = "2";
	input4.value = "10";
	input5.value = "0.1715";
	input6.value = "1097";
	input7.value = "12";
	input8.value = "0.9431";
}

function populatePoison()
{
	let input1 = document.getElementById('box1');
	let input2 = document.getElementById('box2');
	let input3 = document.getElementById('box3');
	let input4 = document.getElementById('box4');
	let input5 = document.getElementById('box5');
	let input6 = document.getElementById('box6');
	let input7 = document.getElementById('box7');
	let input8 = document.getElementById('box8');
	
	input1.value = "73";
	input2.value = "5";
	input3.value = "3";
	input4.value = "2";
	input5.value = "0.88774";
	input6.value = "569";
	input7.value = "12";
	input8.value = "0.94315";
}

async function runExample() {

    var x = new Float32Array( 1, 8 )

    var x = [];

     x[0] = document.getElementById('box1').value;
     x[1] = document.getElementById('box2').value;
     x[2] = document.getElementById('box3').value;
     x[3] = document.getElementById('box4').value;
     x[4] = document.getElementById('box5').value;
     x[5] = document.getElementById('box6').value;
     x[6] = document.getElementById('box7').value;
     x[7] = document.getElementById('box8').value;

    let tensorX = new onnx.Tensor(x, 'float32', [1, 8]);

    let session = new onnx.InferenceSession();

    await session.loadModel("DLnet_MushroomData.onnx");
    let outputMap = await session.run([tensorX]);
    let outputData = outputMap.get('output1');

   let predictions = document.getElementById('predictions');

  predictions.innerHTML = ` <hr> Got an output tensor with values: <br/>
   <table>
     <tr>
       <td> Mushroom Mum </td>
       <td id="td0">  ${outputData.data[0].toFixed(2)}  </td>
     </tr>
  </table>`;
    
}
