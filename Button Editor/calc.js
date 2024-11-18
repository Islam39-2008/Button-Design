function btn_click(){
    font_color = document.querySelector("#font_color").value ;
    font_color_txt = document.querySelector("#font_color_txt").value = font_color ;

}
function border(){
    border_color_btn = document.querySelector("#border_color_btn_").value ;
    border_color_txt_= document.querySelector("#border_color_txt_").value = border_color_btn ;
  
}
function shadow(){
    shadow_color_btn = document.querySelector("#shadow_color_btn").value ;
    shadow_color_txt =document.querySelector("#shadow_color_txt").value = shadow_color_btn ;
      
}
function shadow_txt(){
    shadow_color = document.querySelector("#shadow_txt_btn").value ;
    shadow_color_txt = document.querySelector("#shadow_txt_txt").value = shadow_color ;
   
}
function background(){
    color = document.querySelector("#bg_color").value;
    document.querySelector(".btn_edit").style.background = color;
}
function bg_txt(){
    bg_color = document.querySelector("#bg_btn").value ;
    bg_color_txt = document.querySelector("#bg_txt").value = bg_color ;

}
function edit(){
    button = document.querySelector(".btn");

    bg_color_txt = document.querySelector("#bg_txt").value;
    button.style.backgroundColor=bg_color_txt;
    // النص
    text = document.querySelector("#txt").value;
    //حجم الخط
    size_font = document.querySelector("#size_font").value;

    //نوع الخط

    familly_font = document.querySelector("#familly_font").value;
    //خشن الخط
    weight_font = document.querySelector("#weight_font").value ;
    //اتجاه الخط
    text_align = document.querySelector("#text_align").value ;
    //زينة الخط 
    style_font = document.querySelector("#style_font").value ;
    //لون الخط
    font_color_txt = document.querySelector("#font_color_txt").value ;
    //العرض
    width = document.querySelector("#padding_width").value ;
    //الطول
    height = document.querySelector("#padding_height").value ;
    //الزوايا
    border_rad = document.querySelector("#border_rad").value ;
    //حجم الهامش
    border_weight = document.querySelector("#border_weight").value ;
    //لون الهامش
    border_color_txt = document.querySelector("#border_color_txt_").value ;
    //شكل الهامش
    border_style = document.querySelector("#border_style").value ;
    //نزول الضل
    height_shadow = document.querySelector("#height_shadow").value ;
    //عرض الضل
    width_shadow = document.querySelector("#width_shadow").value ;
    //شفافية الضل
    blur_shadow = document.querySelector("#blur_shadow").value ;
    // حجم الضل
    spread_shadow = document.querySelector("#spread_shadow").value ;
    //لون الضل
    shadow_color_txt = document.querySelector("#shadow_color_txt").value ;

    txt_width = document.querySelector("#txt_width").value ;
    
    txt_height = document.querySelector("#txt_height").value ;

    blur_txt = document.querySelector("#blur_txt").value ;

//-------------------

    //تعديل النص
    button.textContent = text
    //تعديل حجم الخط
    button.style.fontSize = size_font +"px"
    //تعديل نوع الخط
    button.style.fontFamily = familly_font
    //تعديل خشن الخط
    button.style.fontWeight = weight_font
    //تعديل اتجاه الخط
    button.style.textAlign = text_align
    //تعديل زينة الخط
    button.style.fontStyle = style_font
    //تعديل لون الخط
    button.style.color = font_color_txt
    //تعديل الطول
    button.style.width = width + "px"
    //تعديل العرض
    button.style.height = height + "px"
    //تعديل الزوايا
    button.style.borderRadius = border_rad + "px"
    //تعديل حجم الهامش
    button.style.borderWidth =border_weight + "px"
    //تعديل لون الهامش
    button.style.borderColor = border_color_txt
    //تعديل شكل الهامش
    button.style.borderStyle = border_style
    //الضلال
    button.style.boxShadow = height_shadow+"px " + width_shadow+"px " + blur_shadow+"px "+spread_shadow+ "px "+shadow_color_txt

    button.style.textShadow = txt_height+ "px " +txt_width + "px " +blur_txt+"px "+shadow_txt_txt
}


function get_code(){
    //حجم الخط
    size_font = document.querySelector("#size_font").value;
    document.querySelector(".font_size_code").textContent = "font-size : "+size_font+"px;";
   //نوع الخط

    familly_font = document.querySelector("#familly_font").value;
    document.querySelector(".font_familly_code").textContent = "font-familly : "+familly_font+";";

    //خشن الخط
    weight_font = document.querySelector("#weight_font").value ;
    document.querySelector(".font_weight_code").textContent = "font-weight : "+weight_font+";";

    //اتجاه الخط
    text_align = document.querySelector("#text_align").value ;
    document.querySelector(".font_align_code").textContent = "text-align : "+text_align+";";
    
    //زينة الخط 
    style_font = document.querySelector("#style_font").value ;
    document.querySelector(".font_style_code").textContent = "font-style : "+style_font+";";
    //الخلفية
    bg_color_txt = document.querySelector("#bg_txt").value;
    document.querySelector(".bg_code").textContent="background-color : "+bg_color_txt+";"
    //لون الخط
    font_color_txt = document.querySelector("#font_color_txt").value ;
    document.querySelector(".color_code").textContent = "color : "+font_color_txt+";";
    
    //العرض
    width = document.querySelector("#padding_width").value ;
    document.querySelector(".width_code").textContent = "width : "+width +"px;";
    
    //الطول
    height = document.querySelector("#padding_height").value ;
    document.querySelector(".height_code").textContent = "height : "+height +"px;";

    //الزوايا
    border_rad = document.querySelector("#border_rad").value ;

    document.querySelector(".border_rad_code").textContent = "border-radius : "+border_rad +"px;";

    //حجم الهامش
    border_weight = document.querySelector("#border_weight").value ;
    //لون الهامش
    border_color_txt = document.querySelector("#border_color_txt_").value ;
    //شكل الهامش
    border_style = document.querySelector("#border_style").value ;
    document.querySelector(".border_code").textContent = "border : "+border_weight +"px " +border_style+" "+border_color_txt+";";

    
    //نزول الضل
    height_shadow = document.querySelector("#height_shadow").value ;
    //عرض الضل
    width_shadow = document.querySelector("#width_shadow").value ;
    //شفافية الضل
    blur_shadow = document.querySelector("#blur_shadow").value ;
    // حجم الضل
    spread_shadow = document.querySelector("#spread_shadow").value ;
    //لون الضل
    shadow_color_txt = document.querySelector("#shadow_color_txt").value ;

    document.querySelector(".box_shadow_code").textContent ="box-shadow : "+ height_shadow+"px " + width_shadow+"px " + blur_shadow+"px "+spread_shadow+ "px "+shadow_color_txt+";";

    txt_width = document.querySelector("#txt_width").value ;
    
    txt_height = document.querySelector("#txt_height").value ;

    blur_txt = document.querySelector("#blur_txt").value ;

    shadow_txt_txt= document.querySelector("#shadow_txt_txt").value ;

    document.querySelector(".text_shadow_code").textContent ="text-shadow : "+txt_height+ "px " +txt_width + "px " +blur_txt+"px "+shadow_txt_txt+";";

}