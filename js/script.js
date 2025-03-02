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
const taskSix=document.getElementById('task-six').innerText
const glassDoarBtn=document.getElementById('improve-btn')
const deleteBtn=document.getElementById('delete-btn')

//

const moreBtn=document.getElementById('moreBtn')
moreBtn.addEventListener('click',function(){
  
  window.location.href='./discover.html'
})



document.getElementById('current-date').innerText=currentDate
//
shopEaseBtn.addEventListener("click", function () {
  alert("Board Updated Successfully");
  //   let sum = convertedWorkDoneCount + 1;
  let sum = workDone(convertedWorkDoneCount);
  //   let substraction = convertedWorkPendingCount - 1;
  let substraction = workPending(convertedWorkPendingCount);
  if(substraction < 1){
    alert('Congrats!! you have completed all the current tasks.')
  }
  document.getElementById("work-done-count").innerText = sum;
  document.getElementById("work-pending-count").innerText = substraction;
  document.getElementById("shop-ease-btn").style.opacity = "0.3";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='bg-[#F4F7FF] p-2 rounded-md'>
  <p class='  text-sm'>You have completed the task ${taskOne} at ${currentTime} </p>
  </div>
  
  `;
  activitySection.appendChild(div);
  deleteBtn.addEventListener('click',function(){
    activitySection.removeChild(div)
    
  })
  document.getElementById("shop-ease-btn").setAttribute('disabled',true);;
});
//

CloudSyncBtn.addEventListener("click", function () {
  alert("Board Updated Successfully");

  let sum = workDone(convertedWorkDoneCount);

  let substraction = workPending(convertedWorkPendingCount);
  if(substraction < 1){
    alert('Congrats!! you have completed all the current tasks.')
  }
  document.getElementById("work-done-count").innerText = sum;
  document.getElementById("work-pending-count").innerText = substraction;
  document.getElementById("cloud-sync-btn").style.opacity = "0.3";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='bg-[#F4F7FF] p-2 rounded-md'>
  <p class='  text-sm'>You have completed the task ${taskTwo} at ${currentTime} </p>
  </div>
  
  `;
  activitySection.appendChild(div);
  deleteBtn.addEventListener('click',function(){
    activitySection.removeChild(div)
    
  })
  document.getElementById("cloud-sync-btn").setAttribute('disabled',true);
});
//
swiftPayBtn.addEventListener("click", function () {
  alert("Board Updated Successfully");
  let sum = workDone(convertedWorkDoneCount);
  let substraction = workPending(convertedWorkPendingCount);
  if(substraction < 1){
    alert('Congrats!! you have completed all the current tasks.')
  }
  document.getElementById("work-done-count").innerText = sum;
  document.getElementById("work-pending-count").innerText = substraction;
  document.getElementById("swift-pay-btn").style.opacity = "0.3";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='bg-[#F4F7FF] p-2 rounded-md'>
  <p class='  text-sm'>You have completed the task ${taskThree} at ${currentTime} </p>
  </div>
  
  `;
  activitySection.appendChild(div);
  deleteBtn.addEventListener('click',function(){
    activitySection.removeChild(div)
    
  })
  document.getElementById("swift-pay-btn").setAttribute('disabled',true);
});
//
 metaBtn.addEventListener('click',function(){
    alert("Board Updated Successfully");
    let sum = workDone(convertedWorkDoneCount);
    let substraction = workPending(convertedWorkPendingCount);
    if(substraction < 1){
      alert('Congrats!! you have completed all the current tasks.')
    }
    document.getElementById("work-done-count").innerText = sum;
    document.getElementById("work-pending-count").innerText = substraction;
    document.getElementById("meta-btn").style.opacity = "0.3";
    const div = document.createElement("div");
    div.innerHTML = `
    <div class='bg-[#F4F7FF] p-2 rounded-md'>
    <p class='  text-sm'>You have completed the task ${taskFour} at ${currentTime} </p>
    </div>
    
    `;
    activitySection.appendChild(div);
    deleteBtn.addEventListener('click',function(){
      activitySection.removeChild(div)
      
    })
    document.getElementById("meta-btn").setAttribute('disabled',true);
 })
 //
 googleBtn.addEventListener('click',function(){
    alert("Board Updated Successfully");
    let sum = workDone(convertedWorkDoneCount);
    let substraction = workPending(convertedWorkPendingCount);
    if(substraction < 1){
      alert('Congrats!! you have completed all the current tasks.')
    }
    document.getElementById("work-done-count").innerText = sum;
    document.getElementById("work-pending-count").innerText = substraction;
    document.getElementById("google-btn").style.opacity = "0.3";
    const div = document.createElement("div");
    div.innerHTML = `
    <div class='bg-[#F4F7FF] p-2 rounded-md'>
    <p class='  text-sm'>You have completed the task ${taskFive} at ${currentTime} </p>
    </div>
    
    `;
    activitySection.appendChild(div);
    deleteBtn.addEventListener('click',function(){
      activitySection.removeChild(div)
      
    })
    document.getElementById("google-btn").setAttribute('disabled',true);
 })

 //
 glassDoarBtn.addEventListener('click',function(){
  alert("Board Updated Successfully");
  
  let sum = workDone(convertedWorkDoneCount);
  let substraction = workPending(convertedWorkPendingCount);
  if(substraction < 1){
    alert('Congrats!! you have completed all the current tasks.')
  }
  document.getElementById("work-done-count").innerText = sum;
  document.getElementById("work-pending-count").innerText = substraction;
  document.getElementById("improve-btn").style.opacity = "0.3";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='bg-[#F4F7FF] p-2 rounded-md'>
  <p class='  text-sm'>You have completed the task ${taskSix} at ${currentTime} </p>
  </div>
  
  `;
  activitySection.appendChild(div);
  deleteBtn.addEventListener('click',function(){
    activitySection.removeChild(div)
    
  })
  document.getElementById("improve-btn").setAttribute('disabled',true);
 })