let interviewList = [];
let rejectionList = [];
let currentStatus ="all";

//--------------- job tracker count updating---------------//
const total = document.getElementById("total");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
// const totalJobs = document.getElementById("total-jobs");
const application = document.getElementById("all-application");
const filter = document.getElementById("fltered-section");


//-----All button e click korle kichu hobe

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");
const totalJobs = document.getElementById("total-jobs");
const deletebtn = document.querySelector(".delete");

//--------------- job tracker count updating---------------//

function toggle(id){

  //------------Adding style to button-------------//
  allFilterBtn.classList.add("bg-[#FFFFFF]","text-[#64748B]");
  interviewFilterBtn.classList.add("bg-[#FFFFFF]","text-[#64748B]");
  rejectedFilterBtn.classList.add("bg-[#FFFFFF]","text-[#64748B]");

  //-----Removing blue bg form all button---------//
   allFilterBtn.classList.remove("bg-[#3B82F6]","text-[#FFFFFF]");
   interviewFilterBtn.classList.remove("bg-[#3B82F6]","text-[#FFFFFF]");
   rejectedFilterBtn.classList.remove("bg-[#3B82F6]","text-[#FFFFFF]");

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove("bg-[#FFFFFF]","text-[#64748B]");
    selected.classList.add("bg-[#3B82F6]","text-[#FFFFFF]");

//-------- jei btn click korle j page show korbe----------//

    if(id == 'interview-filter-btn'){
        application.classList.add('hidden');
        filter.classList.remove('hidden');
        totalJobs.innerText = interviewList.length;
        renderInterview();
    }else if(id == 'all-filter-btn'){
        application.classList.remove('hidden');
        filter.classList.add('hidden');
        // total.innerText = application.children.length;

    }else if(id == "rejected-filter-btn"){
        application.classList.add('hidden');
        filter.classList.remove('hidden');
        totalJobs.innerText = rejectionList.length;
        renderRejection();
    }
 count();
    //-----btn e click korle & list empty thakle kaj korbe-----------//


    if(id == 'interview-filter-btn' && interviewList.length == 0){
            filter.innerHTML ='';
            let div = document.createElement("div");
            div.className = "flex flex-col items-center my-[15%] space-y-5";
            div.innerHTML = `
            <div class="">
            <img src="./jobs.png" alt="">
        </div>
        <div class="text-center space-y-3">
            <h1 class="font-semibold text text-[24px] ">No jobs available</h1>
            <p class="text-[#64748B] ">Check back soon for new job opportunities</p>
        </div>
            `
            filter.appendChild(div);
    }
    if(id == "rejected-filter-btn" && rejectionList.length == 0){
            filter.innerHTML ='';
            let div = document.createElement("div");
            div.className = "flex flex-col items-center my-[15%] space-y-5";
            div.innerHTML = `
            <div class="">
            <img src="./jobs.png" alt="">
        </div>
        <div class="text-center space-y-3">
            <h1 class="font-semibold text text-[24px] ">No jobs available</h1>
            <p class="text-[#64748B] ">Check back soon for new job opportunities</p>
        </div>
            `
            filter.appendChild(div);
    }

}



//------------main function e eventlistener add er moddhome interviewlist & rejectedList banabo------------//

// const main = document.querySelector("main");

document.addEventListener("click",function(event){

    if(event.target.classList.contains("interview-btn")){
    
    // const parentNode = event.target.parentNode.parentNode;
    const parentNode = event.target.closest('.job-card');
    console.log(parentNode);
    const company = parentNode.querySelector(".company").innerText;
    const skill = parentNode.querySelector(".skill").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const work = parentNode.querySelector(".work").innerText;
    parentNode.querySelector(".status").innerText = "Interview";
    // parentNode.querySelector(".status").style.bgcolor = "red";
    // status.style.bg-color = "green";
    const card = {
        company,
        skill,
        salary,
        status:'Interview',
        work
    }
//   console.log(card);
    const jobExist = interviewList.find(item => item.company == card.company);

    if(!jobExist){
    interviewList.push(card);
  }
    
    rejectionList = rejectionList.filter(item => item.company != card.company)
        count();
    if(currentStatus == "rejected-filter-btn"){
        // totalJobs.innerText = rejectionList.length;
        renderRejection();
    }

    }

    else if(event.target.classList.contains("rejected-btn")){
    // const parentNode = event.target.parentNode.parentNode;
    const parentNode = event.target.closest('.job-card');
    console.log(parentNode);
    const company = parentNode.querySelector(".company").innerText;
    const skill = parentNode.querySelector(".skill").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const work = parentNode.querySelector(".work").innerText;
    parentNode.querySelector(".status").innerText = "Rejected";
    
    const card = {
        company,
        skill,
        salary,
        status:'Rejected',
        work
    }
    console.log(card);
    const jobExist = rejectionList.find(item => item.company == card.company);

    if(!jobExist){
    rejectionList.push(card);
  }
  interviewList = interviewList.filter(item => item.company != card.company);
  
  if(currentStatus == "interview-filter-btn"){
      renderInterview();
    }
    count();
    }

    // else if(event.target.parentNode.parentNode){
    else if(event.target.closest(".delete")){

    
    // const parentNode = event.target.parentNode.parentNode.parentNode.parentNode;
    const parentNode = event.target.closest('.job-card');
    // console.log(parentNode);

    const company = parentNode.querySelector(".company").innerText;

    // interviewList থেকে remove করব
    interviewList = interviewList.filter(item => item.company !== company);
    // rejectionList থেকে remove করব
    rejectionList = rejectionList.filter(item => item.company !== company);

    // DOM থেকে remove করব
    parentNode.remove();

    // যদি filter page এ থাকি তাহলে আবার render করব
    if(currentStatus === "interview-filter-btn"){
        renderInterview();
    }
    else if(currentStatus === "rejected-filter-btn"){
        renderRejection();
    }
    // counter update
    count(); 
}

 });
 




 //--------------Delete Button--------------//

//  let deleteCard = [];
//  document.getElementById("delete").addEventListener("click", function(){

//     const jobCard = document.getElementsByClassName("job-card");
//     const empty = document.getElementById("empty");
//     deleteCard.push(jobCard);
//  })
// console.log(deleteCard);










