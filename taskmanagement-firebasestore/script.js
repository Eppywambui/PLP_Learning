// Initialize Firebase with your config
firebase.initializeApp({
    apiKey: "AIzaSyAKNlAOnSRbLK1hKtiGSBUa1MJf2q1z3SE",
    authDomain: "plpapp-a335d.firebaseapp.com",
    projectId: "plpapp-a335d",
    storageBucket: "plpapp-a335d.appspot.com",
    messagingSenderId: "710358924692",
    appId: "1:710358924692:web:8ac9abe8d535de7b69a381"
  });
  
  const db = firebase.firestore(); //define the database
  // Function to add a task
  function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();  //trim to remove any empty space
    if (task !== "") {
      db.collection("tasks").add({   //add a record to the task
        task: task,                     //name of the record
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      taskInput.value = ""; //reseting the input value to an empty string 
    }
  }// the above code allows one to add a task to the database
  
  // Function to render tasks to display them to thhe HTML file 
  function renderTasks(doc) {
    const taskList = document.getElementById("task-list"); //declaring the variable
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
      <span>${doc.data().task}</span>       
      <button onclick="deleteTask('${doc.id}')">Delete</button>
    `;
    taskList.appendChild(taskItem);
  }//stores the records as a document and displaying the tasks on the html doc
  
  // Real-time listener for tasks when they are added to a database
  db.collection("tasks")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {   //setup the realtime listener
      const changes = snapshot.docChanges();    //variable foor listening incase of any changes on the doc
      changes.forEach(change => {
        if (change.type === "added") {
          renderTasks(change.doc);
        }
      });
    });
  
  // Function to delete a task
  function deleteTask(id) {
    db.collection("tasks").doc(id).delete();
  }