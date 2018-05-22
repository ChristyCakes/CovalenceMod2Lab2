$(document).ready(function () {


    function func1() {

        for (var i = 0; i < 100; i++) {
            $('<h3>Accusation ' + (i + 1) + '</h3>').attr('id', i).appendTo('body');
        }

        var friends = ["Jack", "Neil", "Pat", "Billy", "Patrice"];
        var weapons = ["floss", "kleenex", "thermometer", "keyboard", "sock", "pillow", "coaster", "rug", "clock", "bicycle seat", "flashlight", "candlestick", "rope", "knife", "fork", "dvd", "shoe horn", "tea bag", "coffee grounds", "sugar"];
        var locations = ["hall", "bathroom", "backyard", "front yard", "fireplace", "kitchen", "bedroom", "closet", "dog house", "shower"];


        $('h3').click(function () {
            var h3index = Number($(this).attr('id'));
            alert('Accusation '+(h3index+1)+': I accuse '+friends[h3index%5]+', with the '+weapons[h3index%20]+' in the '+locations[h3index%10]+'!')
        })
    }
    func1();








})