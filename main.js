$(document).ready(() => {
  

  $("#color").val("#009562");
  $("#title").val("Frokostkaffe");
  $("#subtitle").val("En ukomplisert hverdagskaffe");

  createPreview();

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result[3])
    {
      return null;
    }

    const rgbValue = { 
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    
    return rgbValue;
  }

  function createPreview() {
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
  }
  $("#generateBtn").click(function() {
    createPreview();
  })

  $("#color").on('input', function() {
    createPreview();
  })
  $("#title").change(function() {
    createPreview();
  })
  $("#subtitle").change(function() {
    createPreview();
  })
  

  $("#downloadBtn").click(function() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      $("#result").html(canvas);
    });
  })

})