
//--Interview button e click korle puro card ta interview list e cole jabe--//
function renderInterview(){
    filter.innerHTML = '';
    if(interviewList.length == 0){
        noJobsBoard();
    }
    for(let interview of interviewList){
        let div = document.createElement("div");
        div.className = 'job-card flex justify-between border p-5 ';
        div.innerHTML = `
        <div class="space-y-4">
        <!-- part 1  -->
            <div>
                <p class="company text-4xl">${interview.company}</p>
                <p class="skill">${interview.skill}</p>
            </div>
        <!-- part 2  -->
         <div class="flex gap-2">
        <p class="salary">Remote • Full-time •$130,000 - $175,000</p>
            
         </div>
        <!-- part 3  -->
        <p class="status max-w-[100px] py-1 text-center font-semibold text-white bg-green-400 rounded-sm">${interview.status}</p>
         <p class="work">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

         <div class="flex gap-4">
            <button class="interview-btn font-semibold border border-[#10B981] px-4 py-2 text-[#10B981]">Interview</button>
            <button class="rejected-btn font-semibold border border-[#EF4444] text-[#EF4444] px-4 py-2">Rejected</button>
         </div>
        </div>
        <!-- main part 2  -->
            
        <div>
            <button class="delete bg-[#64748B]/10 p-2 text-center rounded-full"><i  class="fa-regular fa-trash-can "></i></button>
        </div>
        
        `
        filter.appendChild(div);
    }
 
}

//--Rejected button e click korle puro card ta interview list e cole jabe--//
function renderRejection(){
    filter.innerHTML = '';
    if(rejectionList.length == 0){
        noJobsBoard();
    }
    for(let reject of rejectionList){
        let div = document.createElement("div");
        div.className = 'job-card flex justify-between border p-5';
        div.innerHTML = `
        <div class="space-y-4">
        <!-- part 1  -->
            <div>
                <p class="company text-4xl">${reject.company}</p>
                <p class="skill">${reject.skill}</p>
            </div>
        <!-- part 2  -->
         <div class="flex gap-2">
        <p class="salary">Remote • Full-time •$130,000 - $175,000</p>
            
         </div>
        <!-- part 3  -->
        <p class="status bg-red-700 text-white font-semibold max-w-[100px] py-1 text-center rounded-sm">${reject.status}</p>
         <p class="work">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

         <div class="flex gap-4">
            <button class="interview-btn font-semibold border border-[#10B981] px-4 py-2 text-[#10B981]">Interview</button>
            <button class="rejected-btn font-semibold border border-[#EF4444] text-[#EF4444] px-4 py-2">Rejected</button>
         </div>
        </div>
        <!-- main part 2  -->
            <div>
                <button><span class="delete bg-[#64748B]/10 p-2 rounded-full"><i class="fa-regular fa-trash-can"></i></span></button>
            </div>
        
        `
        filter.appendChild(div);
    }
 
}

//----No jobs board------//

function noJobsBoard(){
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



//------------Calculate Count----------------//


// deletebtn.addEventListener
function count(){
    total.innerText = application.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectionList.length;

    if(currentStatus === "interview-filter-btn"){
        totalJobs.innerText = interviewList.length;
    }
    else if(currentStatus === "rejected-filter-btn"){
        totalJobs.innerText = rejectionList.length;
    }
    else{
        totalJobs.innerText = application.children.length;
    }
}
count();




