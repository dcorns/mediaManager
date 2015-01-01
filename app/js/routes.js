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
        document.getElementById("pictures").innerHTML=filelist;
        var loadNewPic = new XMLHttpRequest();
        f = 0;
        for(f; f<len; f++){
          loadNewPic.open('GET', 'loadPic/'+fileNames[f]);
          loadNewPic.send();
          loadNewPic.onreadystatechange = function(){
            if(loadNewPic.readyState == 4 && loadNewPic.status==200){
              document.getElementById('pictures').innerHTML = document.getElementById('pictures').innerHTML + '<img src=' + fileNames[f] + '></img>';
            }
          }
        }
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