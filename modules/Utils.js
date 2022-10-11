
export class Utils{
  constructor(){
    this.createExtensions();
  }
  
  loadCss = function(pathname){
    var cssFile = pathname.replace("js", "css");
    var cssId = cssFile.hashCode();
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = cssFile;
        link.media = 'all';
        head.appendChild(link);
    }
  }

  createExtensions(){
    String.prototype.hashCode = function() {
      var hash = 0,
        i, chr;
      if (this.length === 0) return hash;
      for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }
  }
}

export default Utils;