let AddParticipant = document.getElementById("btnAddPrtcpnt");

// button Cancel & Submit of Add Particapnt
let buttonCancel = document.getElementById("btnCancel");
let buttonSubmit = document.getElementById("btnSubmit");

let Myregisbox = document.getElementById("RegisBox");
let MyListInfo = document.getElementById("MyListInfo");

const TheMain = document.querySelector("main");
let MainCenter = document.getElementById("maincenter");


let threePoints = document.getElementById("PointsDetails");

// Button Close
let buttonClose = document.getElementById("Close");

//  Button Edit
let buttonEdit = document.getElementById("Edit");
let EditContainer = document.getElementById("EditContai");
let buttonCancelEdit = document.getElementById("BtnCancelEdit")

// Button Delete 
let buttonDelete = document.getElementById ("Delete");
let DeleteConfirmation = document.getElementById("DeleteContainer");
let cancelbtnConfirmation = document.getElementById("cancelButton");
let DeletebtnConfirmation = document.getElementById("DeleteButton");

//  Button Add Note 
let buttonAddNote = document.getElementById("btnAddNote");
let AddNoteContainer = document.getElementById("ContainerAddNote");
let buttonCancelAddNote = document.getElementById("btnCancelAddNote");


// Button addParticipant
AddParticipant.addEventListener("click", ()=> {
    if (Myregisbox.classList.contains("hide")) {
        Myregisbox.classList.remove("hide")
        Myregisbox.classList.add("play")
    }
    else {
        Myregisbox.classList.remove("play")
        Myregisbox.classList.add("hide")
    }
}
)

// Button Cancel
buttonCancel.addEventListener("click", ()=> 
{
    Myregisbox.classList.remove("play");
    Myregisbox.classList.add("hide");
}
)



// Button Submit
buttonSubmit.addEventListener("click", ()=> {

    // Get the values of the input fields in the form
    let MyLastName = document.getElementById("LastName").value;
    let MyFirstName = document.getElementById("FirstName").value;
    let PhoneNumber = document.getElementById("Phone").value;
    let Role = document.getElementById("Role").value;
    let MyEmail = document.getElementById("email").value; 
    let Status = document.getElementById("Status").value; 
    
    let Academic = document.getElementById("Academic").value;
    let EventParticipations = document.getElementById("EventParticip").value;
    let Skills = document.getElementById("Skills").value;
    let SocialMedia = document.getElementById("SocialMedia").value;
    
    // Get the information text elements
    let JobAcademicText = document.getElementById("JobAcademicInfo");
    let SocialInfoText = document.getElementById("SocialInfo");
    let SkillInfoText = document.getElementById("SkillInfo");
    let EventInfoText = document.getElementById("EventInfo");
    let NameOfPartiInfoText = document.getElementById("NameOfParticipant");
    
    // Set the text of the information text elements
    JobAcademicText.innerText = Academic;
    SocialInfoText.innerText = SocialMedia;
    SkillInfoText.innerText = Skills;
    EventInfoText.innerText = EventParticipations;
    NameOfPartiInfoText.innerText = [ MyLastName + " " + MyFirstName ];
    
    if 
    (    
        MyFirstName != "",
        MyLastName != "", 
        PhoneNumber != "",
        Role!= "",
        MyEmail!= "",
        Academic!= "",
        EventParticipations!="",
        Skills!="",
        SocialMedia!=""    
    )
    
    {
        Myregisbox.classList.remove("play");
        Myregisbox.classList.add("hide");
        // creat MyListInfo div 
        const MyListInfo = document.createElement("div");
        MyListInfo.classList.add("MyListInfo");
    
        // creat MyTextList FirstName , p Element 
        const FirstName = document.createElement("p");
        FirstName.innerText = MyFirstName;
    
        // creat MyTextList LastName , p Elemnt
        const LastName = document.createElement("p");
        LastName.innerText = MyLastName;
        
        // creat My PhoneNumber , p Element
        const PhoNumber = document.createElement("p");
        PhoNumber.innerText = PhoneNumber;
    
        // creat My Email , p Element
        const Email = document.createElement("p");
        Email.innerText = MyEmail;
    
        //creat My Role , p Element
        const MyRole = document.createElement("p");
        MyRole.innerText = Role;
    
        // creat My status , p Element
        const MyStatus = document.createElement("p");
        MyStatus.innerText = Status;
    
        // creat icon ... in my list 
        const MyIcon = document.createElement("p")
        const MySpan = document.createElement("span")
        const MoreHoriz = document.createTextNode("more_horiz")
        MySpan.classList.add("material-symbols-outlined");
        // link between Them
        MySpan.appendChild(MoreHoriz);
        MyIcon.appendChild(MySpan);
    
        // link my div with my p Element
        MyListInfo.appendChild(FirstName);
        MyListInfo.appendChild(LastName);
        MyListInfo.appendChild(PhoNumber);
        MyListInfo.appendChild(Email);
        MyListInfo.appendChild(MyRole);
        MyListInfo.appendChild(MyStatus);
        MyListInfo.appendChild(MyIcon);
        // link MListInfo with My Div
        MyPartDiv.appendChild(MyListInfo);
        
        document.getElementById("FirstName").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("Role").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Status").value = "Attend";
        document.getElementById("Skills").value = "";
        document.getElementById("Academic").value = "";
        document.getElementById("EventParticip").value = "";
        document.getElementById("SocialMedia").value = "";
        document.getElementById("NameOfParticipant").value = "";
    }
    else {
        alert("Please you should fill all the fields")
    }
}) 

//  button of three Points to see the information Participant
let MyPartDiv = document.getElementById("MyParticipantsList");
let ParticipantDetails = document.getElementById("PartiDetailsBox");
let elementToDelete;

MyPartDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("material-symbols-outlined")) 
    {
        ParticipantDetails.classList.remove("hide");
        ParticipantDetails.classList.add("play");
        elementToDelete = event.target.closest(".MyListInfo");
    }
} )

// button close to close the Participant Details
buttonClose.addEventListener("click" , () => {
    ParticipantDetails.classList.remove("play");
    ParticipantDetails.classList.add("hide");
})

//  button delete to access to the confirmation delete of participant information
buttonDelete.addEventListener("click", () => {
    DeleteConfirmation.classList.remove("hide");
    DeleteConfirmation.classList.add("play");
})

// button to cancel  the delete of information participant
cancelbtnConfirmation.addEventListener("click", () => {
    DeleteConfirmation.classList.add("hide");
    DeleteConfirmation.classList.remove("play");
})

// button to delete the information of a participant
DeletebtnConfirmation.addEventListener("click", () => {
    DeleteConfirmation.classList.add("hide");
    DeleteConfirmation.classList.remove("play");
    ParticipantDetails.classList.add("hide")
    ParticipantDetails.classList.remove("play");
    elementToDelete.remove();
})

// button Edit 
buttonEdit.addEventListener("click", ()=> {
    EditContainer.classList.add("play");
    EditContainer.classList.remove("hide");
})

// button CancelEdit
buttonCancelEdit.addEventListener("click" , ()=> {
    EditContainer.classList.remove("play");
    EditContainer.classList.add("hide");
})

// button Add Note 
buttonAddNote.addEventListener("click", ()=> {
    AddNoteContainer.classList.remove("hide");
    AddNoteContainer.classList.add("play");
})

// button Cancel Add Note 
buttonCancelAddNote.addEventListener("click" , () => {
    AddNoteContainer.classList.remove("play");
    AddNoteContainer.classList.add("hide");
})