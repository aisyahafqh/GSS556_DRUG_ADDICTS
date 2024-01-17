var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DRUGADDICTINPENINSULARMALAYSIAIN2021_1 = new ol.format.GeoJSON();
var features_DRUGADDICTINPENINSULARMALAYSIAIN2021_1 = format_DRUGADDICTINPENINSULARMALAYSIAIN2021_1.readFeatures(json_DRUGADDICTINPENINSULARMALAYSIAIN2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRUGADDICTINPENINSULARMALAYSIAIN2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRUGADDICTINPENINSULARMALAYSIAIN2021_1.addFeatures(features_DRUGADDICTINPENINSULARMALAYSIAIN2021_1);
var lyr_DRUGADDICTINPENINSULARMALAYSIAIN2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRUGADDICTINPENINSULARMALAYSIAIN2021_1, 
                style: style_DRUGADDICTINPENINSULARMALAYSIAIN2021_1,
                interactive: true,
    title: 'DRUG ADDICT IN PENINSULAR MALAYSIA IN 2021<br />\
    <img src="styles/legend/DRUGADDICTINPENINSULARMALAYSIAIN2021_1_0.png" /> 0 - 500<br />\
    <img src="styles/legend/DRUGADDICTINPENINSULARMALAYSIAIN2021_1_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/DRUGADDICTINPENINSULARMALAYSIAIN2021_1_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/DRUGADDICTINPENINSULARMALAYSIAIN2021_1_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/DRUGADDICTINPENINSULARMALAYSIAIN2021_1_4.png" /> 2000 - 2500<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_DRUGADDICTINPENINSULARMALAYSIAIN2021_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DRUGADDICTINPENINSULARMALAYSIAIN2021_1];
lyr_DRUGADDICTINPENINSULARMALAYSIAIN2021_1.set('fieldAliases', {'qc_id': 'qc_id', 'state': 'state', 'total_of_drug_addict': 'total_of_drug_addict', 'age_15_to_24': 'age_15_to_24', 'age_24_to_34': 'age_24_to_34', 'age_35_and_above': 'age_35_and_above', 'male': 'male', 'female': 'female', 'rehabilition_center': 'rehabilition_center', 'address': 'address', 'district': 'district', 'phone': 'phone', 'email': 'email', 'Percentage': 'Percentage', });
lyr_DRUGADDICTINPENINSULARMALAYSIAIN2021_1.set('fieldImages', {'qc_id': 'TextEdit', 'state': 'TextEdit', 'total_of_drug_addict': 'Range', 'age_15_to_24': 'Range', 'age_24_to_34': 'Range', 'age_35_and_above': 'Range', 'male': 'Range', 'female': 'Range', 'rehabilition_center': 'TextEdit', 'address': 'TextEdit', 'district': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'Percentage': 'ExternalResource', });
lyr_DRUGADDICTINPENINSULARMALAYSIAIN2021_1.set('fieldLabels', {'qc_id': 'no label', 'state': 'inline label', 'total_of_drug_addict': 'inline label', 'age_15_to_24': 'inline label', 'age_24_to_34': 'inline label', 'age_35_and_above': 'inline label', 'male': 'inline label', 'female': 'inline label', 'rehabilition_center': 'inline label', 'address': 'inline label', 'district': 'inline label', 'phone': 'inline label', 'email': 'inline label', 'Percentage': 'inline label', });
lyr_DRUGADDICTINPENINSULARMALAYSIAIN2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});