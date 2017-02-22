#pragma strict

var DoubleClickTimer:int = 0;
var ChildCamera:GameObject;
static var ChildCameraActive:boolean = false;

function Start () {

}

function Update () {
	if(DoubleClickTimer <= 0){
		DoubleClickTimer = 0;
	} else {
		DoubleClickTimer --;
	}
	
	if(Input.GetKeyDown(KeyCode.Q) && ChildCameraActive == true){
		ChildCamera.GetComponent(Camera).enabled = false;
		GameObject.Find("Main Camera").GetComponent(Camera).enabled = true;
		ChildCameraActive = false;
	}

}

function OnMouseDown(){
	if(DoubleClickTimer == 0 && ChildCameraActive == false){
		DoubleClickTimer = 20;
		return;
	}
	if(DoubleClickTimer > 0){
		ChildCameraActive = true;
		GameObject.Find("Main Camera").GetComponent(Camera).enabled = false;
		ChildCamera.GetComponent(Camera).enabled = true;
		
	}
}

