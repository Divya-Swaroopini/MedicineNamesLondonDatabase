function doPost(e) {
    try {
        // Get the folder ID where the audio files will be saved
        var folderId = 'YOUR_FOLDER_ID';
        var folder = DriveApp.getFolderById(folderId);

        // Get the audio blob from the request
        var blob = Utilities.newBlob(e.parameters.audio, e.parameters.mimetype, e.parameters.filename);

        // Create a file in the specified folder with the blob
        var file = folder.createFile(blob);
        return ContentService.createTextOutput('File uploaded successfully: ' + file.getUrl());
    } catch (error) {
        return ContentService.createTextOutput('Error: ' + error.message);
    }
}
