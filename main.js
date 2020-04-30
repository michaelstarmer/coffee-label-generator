$(document).ready(() => {
  
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result[3])
    {
      return null;
    }

    console.log({result})
    console.log('Math:', Math.max(parseInt(result[1])))

    const rgbValue = { 
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    console.log({rgbValue})
    
    return rgbValue;
  }
  
  const generateBtn = $("#generateBtn");
  
  generateBtn.click(function() {
    let previewContainer = $(".preview-area");
    let color = $("#color").val();
    let title = $("#title").val();
    let subtitle = $("#subtitle").val();

    let prvTitle = $("#preview-title");
    let prvSubtitle = $("#preview-subtitle");

    const {r,g,b} = hexToRgb(color);
    console.log(r,g,b)

    let labelSticker = $("#label");
    labelSticker.attr("style", `background: linear-gradient(rgba(${r}, ${g}, ${b}, 0.4), rgba(${r}, ${g}, ${b}, 0.5)), url(../img/circle.png);`);

    prvTitle.text(title);
    prvSubtitle.text(subtitle);

    previewContainer.removeClass("d-none");
  })

})