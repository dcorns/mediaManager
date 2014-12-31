/**
 * routes.js
 * Created by dcorns on 12/31/14.
 */
'use strict';

module.exports = function(){
return {
  getNewPictures: function(){
    var getNewPics = new XMLHttpRequest();
    getNewPics.open('GET', 'newPictures');
    getNewPics.send();
    getNewPics.onreadystatechange=function()
    {
      if (getNewPics.readyState==4 && getNewPics.status==200)
      {
        var newPics = JSON.parse(getNewPics.response);
        var fileNames = newPics.fileNames;
        var len = fileNames.length
          , filelist = '<ul>'
          , f = 0;
        for (f; f<len; f++){
          filelist = filelist + '<li>' + fileNames[f] + '</li>';
        }
        filelist = filelist + '</ul>';
        console.log('rts17'); console.dir(filelist);
        document.getElementById("pictures").innerHTML=filelist;
      }
    }
  },
  getNewAudio: function(){
    var getNewPics = new XMLHttpRequest();
    getNewPics.open('GET', 'newAudio');
    getNewPics.send();
  },
  getNewVideo: function(){
    var getNewPics = new XMLHttpRequest();
    getNewPics.open('GET', 'newVideo');
    getNewPics.send();
  }
};

};