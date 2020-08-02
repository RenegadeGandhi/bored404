const activity = document.getElementById("activity");
const getActivity = document.getElementById("get-activity");

getActivity.addEventListener("click", a);

function a() {
    fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json())
    .then(data => {
        let newData = Object.values(data);
        let whatToDo = ({
            "activity": newData[0],
            "type": newData[1],
            "accessibility": newData[6],
            "participants": newData[2],
        });
        

        let chore = "<h1>Here's What You Can Do</h1>";
            chore += `<ul>
                        <li class="todo">${whatToDo.activity}</li>
                        <li>This activity falls under ${whatToDo.type}</li>
                        <li>The probability of you doing this is ${whatToDo.accessibility}, prove me wrong?</li>
                        <li>Number of participants for this is ${whatToDo.participants}</li>
                    </ul>`
        
        activity.innerHTML = chore;
    })
}