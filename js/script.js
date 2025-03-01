const workDoneCount = document.getElementById("work-done-count").innerText;
const convertedWorkDoneCount = parseFloat(workDoneCount);

const workPendingCount =
  document.getElementById("work-pending-count").innerText;
const convertedWorkPendingCount = parseFloat(workPendingCount);
const shopEaseBtn = document.getElementById("shop-ease-btn");
const activitySection = document.getElementById("activity-section");
const taskOne = document.getElementById("task-1").innerText;
const currentTime = new Date().toLocaleTimeString();
const currentDate= new Date().toDateString()
const taskTwo = document.getElementById("task-2").innerText;
const CloudSyncBtn = document.getElementById("cloud-sync-btn");
const swiftPayBtn = document.getElementById("swift-pay-btn");
const taskThree = document.getElementById("task-3").innerText;
const taskFour=document.getElementById('task-4').innerText
const metaBtn=document.getElementById('meta-btn')
const taskFive=document.getElementById('task-5').innerText
const googleBtn=document.getElementById('google-btn')
// const taskSix=document.getElementById('task-6').innerText
const glassDoarBtn=document.getElementById('improve-btn')
//





document.getElementById('current-date').innerText=currentDate
//
shopEaseBtn.addEventListener("click", function () {
  alert("Board Updated Successfully");
  //   let sum = convertedWorkDoneCount + 1;
  let sum = workDone(convertedWorkDoneCount);
  //   let substraction = convertedWorkPendingCount - 1;
  let substraction = workPending(convertedWorkPendingCount);
  document.getElementById("work-done-count").innerText = sum;
  document.getElementById("work-pending-count").innerText = substraction;
  document.getElementById("shop-ease-btn").classList.add("disabled");
  document.getElementById("shop-ease-btn").style.opacity = "0.3";
  const div = document.createElement("div");
  div.innerHTML = `
    <div class='bg-[#F4F7FF] p-2 rounded-md'>
     <p class='  text-sm'>You have completed the task ${taskOne} at ${currentTime} </p>
     </div>
   
    `;
  activitySection.appendChild(div);
});
//

CloudSyncBtn.addEventListener("click", function () {
  alert("Board Updated Successfully");

  let sum = workDone(convertedWorkDoneCount);

  let substraction = workPending(convertedWorkPendingCount);
  document.getElementById("work-done-count").innerText = sum;
  document.getElementById("work-pending-count").innerText = substraction;
  document.getElementById("cloud-sync-btn").classList.add("disabled");
  document.getElementById("cloud-sync-btn").style.opacity = "0.3";
  const div = document.createElement("div");
  div.innerHTML = `
      <div class='bg-[#F4F7FF] p-2 rounded-md'>
       <p class='  text-sm'>You have completed the task ${taskTwo} at ${currentTime} </p>
       </div>
     
      `;
  activitySection.appendChild(div);
});
//
swiftPayBtn.addEventListener("click", function () {
  alert("Board Updated Successfully");
  let sum = workDone(convertedWorkDoneCount);
  let substraction = workPending(convertedWorkPendingCount);
  document.getElementById("work-done-count").innerText = sum;
  document.getElementById("work-pending-count").innerText = substraction;
  document.getElementById("swift-pay-btn").classList.add("disabled");
  document.getElementById("swift-pay-btn").style.opacity = "0.3";
  const div = document.createElement("div");
  div.innerHTML = `
      <div class='bg-[#F4F7FF] p-2 rounded-md'>
       <p class='  text-sm'>You have completed the task ${taskThree} at ${currentTime} </p>
       </div>
     
      `;
  activitySection.appendChild(div);
});
//
 metaBtn.addEventListener('click',function(){
    alert("Board Updated Successfully");
    let sum = workDone(convertedWorkDoneCount);
    let substraction = workPending(convertedWorkPendingCount);
    document.getElementById("work-done-count").innerText = sum;
    document.getElementById("work-pending-count").innerText = substraction;
    document.getElementById("meta-btn").classList.add("disabled");
    document.getElementById("meta-btn").style.opacity = "0.3";
    const div = document.createElement("div");
    div.innerHTML = `
        <div class='bg-[#F4F7FF] p-2 rounded-md'>
         <p class='  text-sm'>You have completed the task ${taskFour} at ${currentTime} </p>
         </div>
       
        `;
    activitySection.appendChild(div);
 })
 //
 googleBtn.addEventListener('click',function(){
    alert("Board Updated Successfully");
    let sum = workDone(convertedWorkDoneCount);
    let substraction = workPending(convertedWorkPendingCount);
    document.getElementById("work-done-count").innerText = sum;
    document.getElementById("work-pending-count").innerText = substraction;
    document.getElementById("google-btn").classList.add("disabled");
    document.getElementById("google-btn").style.opacity = "0.3";
    const div = document.createElement("div");
    div.innerHTML = `
        <div class='bg-[#F4F7FF] p-2 rounded-md'>
         <p class='  text-sm'>You have completed the task ${taskFive} at ${currentTime} </p>
         </div>
       
        `;
    activitySection.appendChild(div);
 })

 //
 glassDoarBtn.addEventListener('click',function(){

 })