/*Ques1- Write a nodejs script to create a new directory named after the current user's os username and 
create a file named system_info.txt inside that directory. The file should contain details
 of the users home directory, total system mem and platform

const os = require("os");
const fs = require("fs");


const username = os.userInfo().username;

fs.mkdir(username,(err)=>{
    try {
        console.log("File created sucessfully");
    } catch (error) {
        console.log("Error while creating file");
        
    }
     
});

const homeDirectory = os.homedir();
const totalMemory = os.totalmem();
const platform = os.platform();

fs.writeFile(`${username}/system_info.txt`, `Home Directory: ${homeDirectory}\nTotal Memory: ${totalMemory}\n Platform: ${platform}`, "utf-8", (err) =>{
    try {
        console.log("File created sucessfully");
        
    } catch (error) {
        console.log("Error while creating file");
        
    }
})
*/

/* Ques2: Create a NodeJS script that reads a given directory's contents, filters out only .txt files, moves 
them into a new directory called txt_files using a path module to construct path

const os = require("os");
const path = require("path");
const fs = require("fs");

fs.writeFile("khush/system1.txt", "Hello system1.txt", (err)=>{
    try {
        console.log("File created sucessfully!");

    } catch (err) {
        console.log("Error while creating file!");

    }
})
fs.writeFile("khush/system1.js", "const name = 1", (err)=>{
    try {
        console.log("File created sucessfully!");

    } catch (err) {
        console.log("Error while creating file!");

    }
})

fs.mkdir("txt_files", (err)=>{
    try {
        console.log("Folder created sucessfully!");
    } catch (error) {
        console.log("Error while creating folder!");

    }
})
var filesOfKhush = [];

fs.readdir("khush", (err, files) => {
    try {
      for (let file of files) {
        if (path.extname(file) === ".txt") {
            const source = path.join(__dirname, "khush", file);
            const destination = path.join(__dirname, "txt_files", file);

            fs.rename(source,destination,(err)=>{
                try {
                    console.log("Sucess!");
                    
                } catch (err) {
                    console.log(err);
                    
                }
            })
             
           }
       
          }


    } catch (error) {
        console.log("Error while reading folder!", error);

    }
})
*/


/* Question 3:
Write a Node.js script that accepts a filename as input, checks if the file exists in the current 
working directory using the fs module, and if it exists, prints its full absolute path using the path module. 
If the file doesn't exist, create it.

const os = require("os");
const path = require("path");
const fs = require("fs");

const userInput = process.argv[2]; // js hum node index.js likthe hai to uske baad ek or argument dege to vo show krta hai.

fs.readdir("khush",(err, files)=>{
    try {
        for(let file of files){
            if(file === userInput){
                console.log(path.join(__dirname, "khush",file));
                
            }
            else{
                fs.writeFile(`khush/${userInput}`,"hi", (err)=>{
                    try {
                        console.log("Yess!");
                        
                    } catch (err) {
                        console.log(err);
                        
                    }
                })
            }
        }
        
    } catch (err) {
        console.log(err);
        
    }
})
*/


/*Question 4:
Develop a Node.js program that creates a log file in the current user's home directory. 
The log file should record the current date and time, OS type, and total system memory 
each time the script is executed.
const os = require("os");
const fs = require("fs");

const date  = new Date().toISOString();
const osName = os.platform();
const memory = os.totalmem();

fs.appendFile("khush/log.txt", `\n${date}, ${osName}, ${memory}`, (err)=>{
    try {
        console.log("yo!");
        
    } catch (err) {
        console.log(err);
        
    }
})
*/


/* Question 5:
Create a Node.js script that traverses all files in a given directory and logs the size 
and file type of each file using the fs, path, and os modules, and prints out 
the total number of files processed.
const fs = require("fs");
const path = require("path");
const os = require("os");

fs.readdir("khush",(err,files)=>{
    try {
        for(let file of files){
           
            
            console.log("Type of file is:",path.extname(file));

            fs.stat(`khush/${file}`,(err, stats)=>{
                try {
                    console.log("Size of file is", stats.size);
                } catch (err) {
                    console.log(err);
                    
                }
            })
           
            
            
        }
    } catch (err) {
        console.log(err);
        
    }
})
*/




/*Question 6:
You are building a backup system for a server. Write a Node.js script that identifies all files larger 
than 1MB in a specific directory, appends a timestamp to their filenames (e.g., backup_filename_20241005.txt), 
and moves them to a backups folder. Ensure the script works across different operating systems.

const fs = require("fs");
const os = require("os");
const path = require("path");

if(!fs.existsSync("backup")){
    fs.mkdirSync("backup");
}

fs.readdir("khush", (err,files) =>{
    try {
        
        for(let file of files){
            fs.stat(`khush/${file}`, (err, stats)=>{
                try {
                    if(stats.size > 250){
                    
                        const date = new Date().getTime();
                        const newName = file + '' + date;

                       
                        const source = path.join(__dirname, "khush", file);
                        const destination = path.join(__dirname, "backup", newName);
                        
                        
                        fs.rename(source, destination, (err)=>{
                            try {
                                
                                console.log("Files backuped!");
                                
                            } catch (err) {
                                console.log(err);
                                
                            }
                        });

                    }
                    
                } catch (err) {
                    console.log(err);
                    
                }
            })
            
        }
    } catch (error) {
        console.log(error);
        
    }
}) */


/*Question 7:
Create a Node.js script that monitors a specific directory for any new files being added. 
When a new file is detected, log its full path and the creation date in a new_files_log.txt file 
located in the same directory. Use the path and fs modules to handle file paths and system interactions.

const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "khush")

if(!fs.existsSync(folder)){
    fs.mkdirSync(folder);
}

const logFile = path.join(folder, "new_files_log.txt");

if(!fs.existsSync(logFile)){
    fs.writeFileSync(logFile, "This is the log file");
}


fs.watch(folder, (eventType, filename)=>{
  console.log("Watching",folder);
  
    if(eventType === "rename" && filename){
        const filepath = path.join(folder, filename);
        fs.stat(filepath, (err,stats)=>{
            
            if(err){
                
                console.log("Files are removed!");
                
            }
            else if(stats.isFile()){
                
                const birthDate = new Date(stats.birthtime).toISOString();
                
                fs.appendFileSync(logFile, `\n${filepath}=>${birthDate}`);
            }
            
        })
    }
})
*/



// Question 8:
// Develop a Node.js program that reads all files from a given directory, 
// checks if they are executable files based on their permissions (on Unix-like systems), 
// and copies only the executable files to a folder named executables. Use the fs, path, and os modules to achieve this.

// const fs = require("fs");
// const path = require("path");
// const os = require("os");


// const folder = path.join(__dirname, "khush");


// fs.readdir(folder, (err,files)=>{  
//     try {
//         for(let file of files){
//             fs.accessSync(file,fs.constants.X_OK,(err)=>{
//                 if(!err){
//                     console.log(file);
                    
//                 }
//                 else{
//                     console.log("ok");
                    
//                 }
                
//             });
//         }
        


//     } catch (err) {
       
        
//         console.log(err);
        
//     }
// })



/*Question 9:
Write a Node.js script to traverse a directory recursively and list all files along with their relative paths from the root directory. 
Print this list to a file called file_structure.txt. Use the path module to correctly handle paths across different operating systems.

const os = require("os");
const path = require("path");
const fs = require("fs");

const folder = path.join(__dirname, "khush");
fs.readdir(folder, (err, files) =>{
    
    
    try {
        for(let file of files){
            if(fs.existsSync("file_structure.txt")){
                
                fs.appendFileSync("file_structure.txt", "\n" + path.join(__dirname,"khush",file));
            }
            else{
                
                
                fs.writeFileSync("file_structure.txt", path.join(__dirname,"khush",file));
            }
        }
        
    } catch (err) {
        console.log(err);
        
    }
})

const path = require("path");
const fs = require("fs");


const rootDir = path.join(__dirname, "khush");
const outputFile = path.join(__dirname, "file_structure.txt");


fs.writeFileSync(outputFile, "");

function traverseDirectory(dir, relativePath = "") {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const relativeFilePath = path.join(relativePath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            
            traverseDirectory(fullPath, relativeFilePath);
        } else {
            
            fs.appendFileSync(outputFile, relativeFilePath + "\n");
        }
    }
}


try {
    traverseDirectory(rootDir);
    console.log("File structure has been saved to file_structure.txt");
} catch (err) {
    console.error("An error occurred:", err);
}
*/

// Question 10:
// You are developing a utility that merges multiple text files in a directory into one file named merged.txt. 
// Your Node.js script should read all .txt files in the directory, append their content into merged.txt in the order of modification time 
// (oldest first), and delete the original files after merging.


// const fs  = require("fs");
// const os = require("os");
// const path = require("path");
// const folder = path.join(__dirname,"khush");


// if(!fs.existsSync(`${folder}/merge.txt`)){
//     fs.writeFileSync(`${folder}/merge.txt`, "This is the merged file\n");
// }

// fs.readdir(folder,(err,files)=>{
//     try {
//         for(let file of files){
//              console.log(path.extname(file));
             
//             if(path.extname(file) === ".txt" && file !==  "merge.txt"){
                
                
//                 const data = fs.readFileSync(`${folder}/${file}`,"utf-8");
                
                
//                 fs.appendFileSync(`${folder}/merge.txt`, data);
//             }
//         }
//     } catch (err) {
//         console.log(err);
        
//     }
// })

