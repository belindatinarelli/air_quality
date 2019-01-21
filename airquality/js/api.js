$(function () { // Questo è importante perché fa sì che tutto il resto sia eseguito solo dopo che la pagina è stata caricata

    $("#gps").click(function () { // Funzione eseguita solo al click sul pulsante

        navigator.geolocation.getCurrentPosition(function (p) {

            console.log(p);
            let latitude = p.coords.latitude;
            latitude = latitude.toString();
            let longitude = p.coords.longitude;
            longitude = longitude.toString();
            console.log(latitude);
            console.log(longitude);
            var key = 'H7jxQkuTjD3Xscx8Z'

            $.ajax({
                url: 'https://api.airvisual.com/v2/city?city=Huesca&state=Aragon&country=Spain&key=H7jxQkuTjD3Xscx8Z',
                // url: 'https://api.airvisual.com/v2/nearest_city?lat=' + latitude + '&lon=' + longitude + '&key=' + key,
                method: 'GET',
                timeout: 0,
                success: function (result) {

                    console.log(result);

                    let air_value = result.data.current.pollution.aqius;
                    let temperature = result.data.current.weather.tp;
                    let pressure = result.data.current.weather.pr;
                    let umidity = result.data.current.weather.hu;
                    let wind_speed = result.data.current.weather.ws;
                    let icon = result.data.current.weather.ic;

                    console.log(air_value);
                    console.log(temperature);
                    console.log(pressure);
                    console.log(umidity);
                    console.log(wind_speed);
                    console.log(icon);

                    $('#air').html(
                        '<p class="valore_aria center">' + air_value + '</p>'
                    )

                    $('#dati').html(
                        '<div class="temperatura">'
                        +   '<p>' + '<img class="temp_img" src="img/temperatura.png">' + temperature + '</p>'
                        + '</div>'

                        + '<div class="pressione">'
                        +   '<p class="pressione">' + '<img class="pre_img" src="img/pressione.png">' + pressure + '</p>'
                        + '</div>'

                        + '<div class="umidita">'
                        +   '<p class="umidita">' + '<img class="umi_img" src="img/umidita.png">' + umidity + '</p>'
                        + '</div>'

                        + '<div class="vento">'
                        +   '<p class="vento">' + '<img class="ven_img" src="img/vento.png">' + wind_speed + '</p>'
                        + '</div>'
                    )
                   // $('#meteo').html(
                   //     + '<img class="icone_meteo" src="https://www.airvisual.com/images/' + icon + '.png">'
                   // ) 







                }
            }); // Chiude $.ajax({

        }); // Chiude navigator.geolocation.getCurrentPosition(function (p) {

    }); // Chiude $("#pulsante").click(function () {

}); // Chiude $(function () {


    function apri_risultati() {
        $('#main').removeClass('nascosto')
       }
















/* prova.onclick = function({
   let apiKey = 'H7jxQkuTjD3Xscx8Z';
   let city = 0;
   let url = 'api.airvisual.com/v2/nearest_city?key=';
 })
*/

