var widthApp = document.getElementById("pageone").clientWidth;
function firstEntry(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
        image.style.width = widthApp;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}


function secondEntry(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
    
    function movePic(file){ 
    window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError); 
    } 

    //Callback function when the file system uri has been resolved
    function resolveOnSuccess(entry){ 
        var d = new Date();
        var n = d.getTime();
        //new file name
        var newFileName = n + ".jpg";
        var myFolderApp = "EasyPacking";

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
        //The folder is created if doesn't exist
        fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.moveTo(directory, newFileName,  successMove, resOnError);
                    },
                    resOnError);
                    },
        resOnError);
    }

    //Callback function when the file has been moved successfully - inserting the complete path
    function successMove(entry) {
        //I do my insert with "entry.fullPath" as for the path
    }

    function resOnError(error) {
        alert(error.code);
    }
}

