$(document).ready(function() {
    let weapons = [
        {
            "name":"44_pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99,
            "ammo": 500
        },
        {
            "name":"10mm_pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 83,
            "accuracy": 60,
            "weight": 3.5,
            "value": 50,
            "ammo": 500
        },
        {
            "name":"assault_rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144,
            "ammo": 500
        },
        {
            "name":"none",
            "damage": "-",
            "fire_rate": "-",
            "range": "-",
            "accuracy": "-",
            "weight": "-",
            "value": "-",
            "ammo": "-"
        }
    ]


    $('.item-list a').on('mouseenter', function(e){
        let current_item = $(e.currentTarget).attr("class");
        setItemStats(current_item);
    });

    $('.item-list a').on('mouseout', function(e) {
        
        let activeItem = $('.item-list a.active')?.attr("class")?.split(" ")[0];
        if (activeItem) {
            setItemStats(activeItem);
        } else {
            setItemStats();
        }
        
    });

    $('.item-list a').on('click', function(e) {
        document.querySelector(".item-list a.active")?.classList.remove('active');
        $(e.currentTarget).addClass('active');
    })

    function setItemStats(item = 'none') {

        let container = $('.item-stats');

        for(index in weapons) {
            if(weapons[index].name === item) {
                container.find('.damage').html(weapons[index].damage);
                container.find('.fire_rate').html(weapons[index].fire_rate);
                container.find('.range').html(weapons[index].range);
                container.find('.accuracy').html(weapons[index].accuracy);
                container.find('.weight').html(weapons[index].weight);
                container.find('.value').html(weapons[index].value);
                container.find('.ammo').html(weapons[index].ammo);
            }
        }
    }

});