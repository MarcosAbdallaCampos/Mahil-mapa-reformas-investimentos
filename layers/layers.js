var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CP_arquivo_padrao_1 = new ol.format.GeoJSON();
var features_CP_arquivo_padrao_1 = format_CP_arquivo_padrao_1.readFeatures(json_CP_arquivo_padrao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_arquivo_padrao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_arquivo_padrao_1.addFeatures(features_CP_arquivo_padrao_1);
var lyr_CP_arquivo_padrao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_arquivo_padrao_1, 
                style: style_CP_arquivo_padrao_1,
                popuplayertitle: 'CP_arquivo_padrao',
                interactive: true,
                title: '<img src="styles/legend/CP_arquivo_padrao_1.png" /> CP_arquivo_padrao'
            });
var format_FP_arquivo_padrao_2 = new ol.format.GeoJSON();
var features_FP_arquivo_padrao_2 = format_FP_arquivo_padrao_2.readFeatures(json_FP_arquivo_padrao_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FP_arquivo_padrao_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FP_arquivo_padrao_2.addFeatures(features_FP_arquivo_padrao_2);
var lyr_FP_arquivo_padrao_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FP_arquivo_padrao_2, 
                style: style_FP_arquivo_padrao_2,
                popuplayertitle: 'FP_arquivo_padrao',
                interactive: true,
                title: '<img src="styles/legend/FP_arquivo_padrao_2.png" /> FP_arquivo_padrao'
            });
var group_FazendaPrimavera = new ol.layer.Group({
                                layers: [lyr_FP_arquivo_padrao_2,],
                                fold: 'open',
                                title: 'Fazenda Primavera'});
var group_FazendaCerroPor = new ol.layer.Group({
                                layers: [lyr_CP_arquivo_padrao_1,],
                                fold: 'open',
                                title: 'Fazenda Cerro Porã'});

lyr_GoogleSatellite_0.setVisible(true);lyr_CP_arquivo_padrao_1.setVisible(true);lyr_FP_arquivo_padrao_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_FazendaCerroPor,group_FazendaPrimavera];
lyr_CP_arquivo_padrao_1.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', });
lyr_FP_arquivo_padrao_2.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', });
lyr_CP_arquivo_padrao_1.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Area': 'TextEdit', 'Fazenda': 'TextEdit', });
lyr_FP_arquivo_padrao_2.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', });
lyr_CP_arquivo_padrao_1.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', });
lyr_FP_arquivo_padrao_2.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_FP_arquivo_padrao_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});