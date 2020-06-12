var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_DarkMatter_1 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_Peru_2 = new ol.format.GeoJSON();
var features_Departamentos_Peru_2 = format_Departamentos_Peru_2.readFeatures(json_Departamentos_Peru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_Peru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_Peru_2.addFeatures(features_Departamentos_Peru_2);
var lyr_Departamentos_Peru_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_Peru_2, 
                style: style_Departamentos_Peru_2,
                interactive: false,
                title: '<img src="styles/legend/Departamentos_Peru_2.png" /> Departamentos_Peru'
            });
var format_Capaunida_3 = new ol.format.GeoJSON();
var features_Capaunida_3 = format_Capaunida_3.readFeatures(json_Capaunida_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capaunida_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capaunida_3.addFeatures(features_Capaunida_3);
var lyr_Capaunida_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capaunida_3, 
                style: style_Capaunida_3,
                interactive: true,
    title: 'Capa unida<br />\
    <img src="styles/legend/Capaunida_3_0.png" /> 189 - 519<br />\
    <img src="styles/legend/Capaunida_3_1.png" /> 519 - 1335<br />\
    <img src="styles/legend/Capaunida_3_2.png" /> 1335 - 4444<br />\
    <img src="styles/legend/Capaunida_3_3.png" /> 4444 - 103020<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_DarkMatter_1.setVisible(true);lyr_Departamentos_Peru_2.setVisible(false);lyr_Capaunida_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DarkMatter_1,lyr_Departamentos_Peru_2,lyr_Capaunida_3];
lyr_Departamentos_Peru_2.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_Capaunida_3.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', 'DEPARTAMENTOS': 'DEPARTAMENTOS', '06-mar': '06-mar', '07-mar': '07-mar', '08-mar': '08-mar', '09-mar': '09-mar', '10-mar': '10-mar', '11-mar': '11-mar', '12-mar': '12-mar', '13-mar': '13-mar', '14-mar': '14-mar', '15-mar': '15-mar', '16-mar': '16-mar', '17-mar': '17-mar', '18-mar': '18-mar', '19-mar': '19-mar', '20-mar': '20-mar', '21-mar': '21-mar', '22-mar': '22-mar', '23-mar': '23-mar', '24-mar': '24-mar', '25-mar': '25-mar', '26-mar': '26-mar', '27-mar': '27-mar', '28-mar': '28-mar', '29-mar': '29-mar', '30-mar': '30-mar', '31-mar': '31-mar', '01-abr': '01-abr', '02-abr': '02-abr', '03-abr': '03-abr', '04-abr': '04-abr', '05-abr': '05-abr', '06-abr': '06-abr', '07-abr': '07-abr', '08-abr': '08-abr', '09-abr': '09-abr', '10-abr': '10-abr', '11-abr': '11-abr', '12-abr': '12-abr', '13-abr': '13-abr', '14-abr': '14-abr', '15-abr': '15-abr', '16-abr': '16-abr', '17-abr': '17-abr', '18-abr': '18-abr', '19-abr': '19-abr', '20-abr': '20-abr', '21-abr': '21-abr', '22-abr': '22-abr', '23-abr': '23-abr', '24-abr': '24-abr', '25-abr': '25-abr', '26-abr': '26-abr', '27-abr': '27-abr', '28-abr': '28-abr', '29-abr': '29-abr', '30-abr': '30-abr', '01-may': '01-may', '02-may': '02-may', '03-may': '03-may', '04-may': '04-may', '05-may': '05-may', '06-may': '06-may', '07-may': '07-may', '08-may': '08-may', '09-may': '09-may', '10-may': '10-may', '11-may': '11-may', '12-may': '12-may', '13-may': '13-may', '14-may': '14-may', '15-may': '15-may', '16-may': '16-may', '17-may': '17-may', '18-may': '18-may', '19-may': '19-may', '20-may': '20-may', '21-may': '21-may', '22-may': '22-may', '23-may': '23-may', '24-may': '24-may', '25-may': '25-may', '26-may': '26-may', '27-may': '27-may', '28-may': '28-may', '29-may': '29-may', '30-may': '30-may', '31-may': '31-may', 'IMAGEN': 'Archivo', });
lyr_Departamentos_Peru_2.set('fieldImages', {'fid': '', 'NOMBDEP': '', 'COUNT': '', 'FIRST_IDDP': '', 'HECTARES': '', });
lyr_Capaunida_3.set('fieldImages', {'fid': 'Hidden', 'NOMBDEP': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDDP': 'Hidden', 'HECTARES': 'Hidden', 'DEPARTAMENTOS': 'Hidden', '06-mar': 'Hidden', '07-mar': 'Hidden', '08-mar': 'Hidden', '09-mar': 'Hidden', '10-mar': 'Hidden', '11-mar': 'Hidden', '12-mar': 'Hidden', '13-mar': 'Hidden', '14-mar': 'Hidden', '15-mar': 'Hidden', '16-mar': 'Hidden', '17-mar': 'Hidden', '18-mar': 'Hidden', '19-mar': 'Hidden', '20-mar': 'Hidden', '21-mar': 'Hidden', '22-mar': 'Hidden', '23-mar': 'Hidden', '24-mar': 'Hidden', '25-mar': 'Hidden', '26-mar': 'Hidden', '27-mar': 'Hidden', '28-mar': 'Hidden', '29-mar': 'Hidden', '30-mar': 'Hidden', '31-mar': 'Hidden', '01-abr': 'Hidden', '02-abr': 'Hidden', '03-abr': 'Hidden', '04-abr': 'Hidden', '05-abr': 'Hidden', '06-abr': 'Hidden', '07-abr': 'Hidden', '08-abr': 'Hidden', '09-abr': 'Hidden', '10-abr': 'Hidden', '11-abr': 'Hidden', '12-abr': 'Hidden', '13-abr': 'Hidden', '14-abr': 'Hidden', '15-abr': 'Hidden', '16-abr': 'Hidden', '17-abr': 'Hidden', '18-abr': 'Hidden', '19-abr': 'Hidden', '20-abr': 'Hidden', '21-abr': 'Hidden', '22-abr': 'Hidden', '23-abr': 'Hidden', '24-abr': 'Hidden', '25-abr': 'Hidden', '26-abr': 'Hidden', '27-abr': 'Hidden', '28-abr': 'Hidden', '29-abr': 'Hidden', '30-abr': 'Hidden', '01-may': 'Hidden', '02-may': 'Hidden', '03-may': 'Hidden', '04-may': 'Hidden', '05-may': 'Hidden', '06-may': 'Hidden', '07-may': 'Hidden', '08-may': 'Hidden', '09-may': 'Hidden', '10-may': 'Hidden', '11-may': 'Hidden', '12-may': 'Hidden', '13-may': 'Hidden', '14-may': 'Hidden', '15-may': 'Hidden', '16-may': 'Hidden', '17-may': 'Hidden', '18-may': 'Hidden', '19-may': 'Hidden', '20-may': 'Hidden', '21-may': 'Hidden', '22-may': 'Hidden', '23-may': 'Hidden', '24-may': 'Hidden', '25-may': 'Hidden', '26-may': 'Hidden', '27-may': 'Hidden', '28-may': 'Hidden', '29-may': 'Hidden', '30-may': 'Hidden', '31-may': 'Hidden', 'IMAGEN': 'ExternalResource', });
lyr_Departamentos_Peru_2.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_Capaunida_3.set('fieldLabels', {'IMAGEN': 'header label', });
lyr_Capaunida_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});