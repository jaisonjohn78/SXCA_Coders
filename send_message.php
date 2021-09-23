<?php

$con = mysqli_connect("localhost","root","","form");
//echo json_encode($_POST);
if(isset($_POST["f_name"]) && isset($_POST["l_name"]) && isset($_POST["roll_no"]) && isset($_POST["w_no"]) && isset($_POST["lang"]) && isset($_POST["other"])){
	$f_name = $_POST['f_name'];
	$l_name = $_POST['l_name'];
	$roll_no = $_POST['roll_no'];
	$w_no = $_POST['w_no'];
    $other = $_POST['other'];
    $filed =$_POST['lang'];
   
	$sql = "INSERT INTO coders(f_name,l_name,roll_no,w_no,filed_name,other) VALUES ('{$f_name}', '{$l_name}', '{$roll_no}', '{$w_no}','".$_POST["lang"]."','{$other}')";
    
	if(mysqli_query($con, $sql)){
		echo "Hello {$f_name} your record is saved.";
        
	}else{
		echo "Can't save form data.";
	}
}else{
	echo "Must filled all form fields.";    
}
// if(isset($_POST["languages"]))  
//  {  
       
//       $query = "INSERT INTO `coders`(filed) VALUES ('".$_POST["languages"]."')";  
//       $result = mysqli_query($con, $query);  
//       echo 'Check Box Data Inserted';  
//  }  
?>
