
 $(function () {

    var parametros = {'ajax' : 'si'};

    $.ajax({
        data:  parametros, 
        url:   $('#url').val()+'pago/notifi', 
        type:  'post', 
        beforeSend: function () {
                console.log("Procesando, espere por favor...");
        },
        success:  function (response) {
            console.log(response);
            if(response['mostrar_noti']==1){
                var html_confirm = '<div>Estimado Cliente ya vencio su fecha de pago por favor cancele su cuota  hasta el 21/02 </div>\
                            <br>\
                            <div><span class="text-danger" style="font-size: 18px;">Haga click en el boton pagar</span></div><br>\
                            <a href="'+$("#url").val()+' pago/desac " class="btn btn-danger">Ver Pagos</a>';
            
                Swal.fire({
                            title: '!Pago pendiente!',
                            html: html_confirm,
                            icon: 'error',
                            allowOutsideClick: false,
                            allowEscapeKey : false,
                            showCancelButton: true,
                            showConfirmButton: false,
                            closeOnConfirm: false,
                            closeOnCancel: false
                        });
            }
              
        }
}); 


   /* $.ajax({
        type: 'POST',
        dataType: 'JSON',
        data: parametros,
        url: $('#url').val()+'pago/notifi',

    }).done(function(response){
       
        rp = JSON.parse(response);
        if(rp['mostrar_noti']==1){
            var html_confirm = '<div>Estimado Cliente ya vencio su fecha de pago por favor cancele su cuota  hasta el 21/02 </div>\
                        <br>\
                        <div><span class="text-danger" style="font-size: 18px;">Haga click en el boton pagar</span></div><br>\
                        <a href="'+$("#url").val()+'pago" class="btn btn-danger">Ver Pagos</a>';
        
            Swal.fire({
                        title: '!Pago pendiente!',
                        html: html_confirm,
                        icon: 'error',
                        allowOutsideClick: false,
                        allowEscapeKey : false,
                        showCancelButton: true,
                        showConfirmButton: false,
                        closeOnConfirm: false,
                        closeOnCancel: false
                    });
        }
    }).fail(function (response) {
        console.log("Error " + response);
        
    }) */
})