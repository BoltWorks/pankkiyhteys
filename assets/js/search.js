var typedoc = typedoc || {};
            typedoc.search = typedoc.search || {};
            typedoc.search.data = {"kinds":{"4":"Enumeration","16":"Enumeration member","32":"Variable","64":"Function","128":"Class","256":"Interface","512":"Constructor","1024":"Property","2048":"Method","65536":"Type literal","2097152":"Object literal","4194304":"Type alias"},"rows":[{"id":0,"kind":64,"name":"X509ToCertificate","url":"globals.html#x509tocertificate","classes":"tsd-kind-function"},{"id":1,"kind":2097152,"name":"namespaces","url":"globals.html#namespaces","classes":"tsd-kind-object-literal"},{"id":2,"kind":32,"name":"soap","url":"globals.html#namespaces.soap","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"namespaces"},{"id":3,"kind":32,"name":"dsig","url":"globals.html#namespaces.dsig","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"namespaces"},{"id":4,"kind":32,"name":"wsse","url":"globals.html#namespaces.wsse","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"namespaces"},{"id":5,"kind":32,"name":"wsu","url":"globals.html#namespaces.wsu","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"namespaces"},{"id":6,"kind":32,"name":"WSS_X509V3","url":"globals.html#wss_x509v3","classes":"tsd-kind-variable"},{"id":7,"kind":32,"name":"WSS_B64BINARY","url":"globals.html#wss_b64binary","classes":"tsd-kind-variable"},{"id":8,"kind":32,"name":"DSIG_ENVELOPED_SIGNATURE","url":"globals.html#dsig_enveloped_signature","classes":"tsd-kind-variable"},{"id":9,"kind":64,"name":"getSignatureReferences","url":"globals.html#getsignaturereferences","classes":"tsd-kind-function"},{"id":10,"kind":64,"name":"isRootElement","url":"globals.html#isrootelement","classes":"tsd-kind-function"},{"id":11,"kind":64,"name":"isElementSigned","url":"globals.html#iselementsigned","classes":"tsd-kind-function"},{"id":12,"kind":64,"name":"getSoapSignature","url":"globals.html#getsoapsignature","classes":"tsd-kind-function"},{"id":13,"kind":64,"name":"getSoapCertificate","url":"globals.html#getsoapcertificate","classes":"tsd-kind-function"},{"id":14,"kind":128,"name":"Key","url":"classes/key.html","classes":"tsd-kind-class"},{"id":15,"kind":1024,"name":"privateKey","url":"classes/key.html#privatekey","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Key"},{"id":16,"kind":1024,"name":"certificate","url":"classes/key.html#certificate","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Key"},{"id":17,"kind":512,"name":"constructor","url":"classes/key.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"Key"},{"id":18,"kind":2048,"name":"isAboutToExpire","url":"classes/key.html#isabouttoexpire","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Key"},{"id":19,"kind":2048,"name":"expires","url":"classes/key.html#expires","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Key"},{"id":20,"kind":2048,"name":"getCertificate","url":"classes/key.html#getcertificate","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Key"},{"id":21,"kind":2048,"name":"getPrivateKey","url":"classes/key.html#getprivatekey","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Key"},{"id":22,"kind":2048,"name":"getBase64Certificate","url":"classes/key.html#getbase64certificate","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Key"},{"id":23,"kind":2048,"name":"generateKey","url":"classes/key.html#generatekey","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-static","parent":"Key"},{"id":24,"kind":128,"name":"TrustStore","url":"classes/truststore.html","classes":"tsd-kind-class"},{"id":25,"kind":1024,"name":"tmpDir","url":"classes/truststore.html#tmpdir","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"TrustStore"},{"id":26,"kind":1024,"name":"loadCertificates","url":"classes/truststore.html#loadcertificates","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"TrustStore"},{"id":27,"kind":1024,"name":"caStore","url":"classes/truststore.html#castore","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"TrustStore"},{"id":28,"kind":1024,"name":"intermediaries","url":"classes/truststore.html#intermediaries","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"TrustStore"},{"id":29,"kind":1024,"name":"useDiskCache","url":"classes/truststore.html#usediskcache","classes":"tsd-kind-property tsd-parent-kind-class","parent":"TrustStore"},{"id":30,"kind":512,"name":"constructor","url":"classes/truststore.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"TrustStore"},{"id":31,"kind":2048,"name":"isCertificateTrusted","url":"classes/truststore.html#iscertificatetrusted","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TrustStore"},{"id":32,"kind":2048,"name":"addIntermediary","url":"classes/truststore.html#addintermediary","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TrustStore"},{"id":33,"kind":2048,"name":"getIntermediaries","url":"classes/truststore.html#getintermediaries","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TrustStore"},{"id":34,"kind":2048,"name":"verifyCertificate","url":"classes/truststore.html#verifycertificate","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"TrustStore"},{"id":35,"kind":2048,"name":"loadCachedCertificates","url":"classes/truststore.html#loadcachedcertificates","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"TrustStore"},{"id":36,"kind":2048,"name":"cacheToDisk","url":"classes/truststore.html#cachetodisk","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"TrustStore"},{"id":37,"kind":4194304,"name":"X509Pem","url":"globals.html#x509pem","classes":"tsd-kind-type-alias"},{"id":38,"kind":64,"name":"generateSigningRequest","url":"globals.html#generatesigningrequest","classes":"tsd-kind-function"},{"id":39,"kind":64,"name":"sign","url":"globals.html#sign","classes":"tsd-kind-function"},{"id":40,"kind":64,"name":"verifySignature","url":"globals.html#verifysignature","classes":"tsd-kind-function"},{"id":41,"kind":128,"name":"SoapClient","url":"classes/soapclient.html","classes":"tsd-kind-class"},{"id":42,"kind":2048,"name":"formatTime","url":"classes/soapclient.html#formattime","classes":"tsd-kind-method tsd-parent-kind-class","parent":"SoapClient"},{"id":43,"kind":2048,"name":"addMinutes","url":"classes/soapclient.html#addminutes","classes":"tsd-kind-method tsd-parent-kind-class","parent":"SoapClient"},{"id":44,"kind":2048,"name":"requestId","url":"classes/soapclient.html#requestid","classes":"tsd-kind-method tsd-parent-kind-class","parent":"SoapClient"},{"id":45,"kind":2048,"name":"makeSoapRequest","url":"classes/soapclient.html#makesoaprequest","classes":"tsd-kind-method tsd-parent-kind-class","parent":"SoapClient"},{"id":46,"kind":2048,"name":"verifyEnvelopeSignature","url":"classes/soapclient.html#verifyenvelopesignature","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"SoapClient"},{"id":47,"kind":2048,"name":"signEnvelope","url":"classes/soapclient.html#signenvelope","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"SoapClient"},{"id":48,"kind":256,"name":"ApplicationRequest","url":"interfaces/applicationrequest.html","classes":"tsd-kind-interface"},{"id":49,"kind":1024,"name":"@xmlns","url":"interfaces/applicationrequest.html#_xmlns","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":50,"kind":1024,"name":"CustomerId","url":"interfaces/applicationrequest.html#customerid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":51,"kind":1024,"name":"Command","url":"interfaces/applicationrequest.html#command","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":52,"kind":1024,"name":"Timestamp","url":"interfaces/applicationrequest.html#timestamp","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":53,"kind":1024,"name":"StartDate","url":"interfaces/applicationrequest.html#startdate","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":54,"kind":1024,"name":"EndDate","url":"interfaces/applicationrequest.html#enddate","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":55,"kind":1024,"name":"Status","url":"interfaces/applicationrequest.html#status","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":56,"kind":1024,"name":"ServiceId","url":"interfaces/applicationrequest.html#serviceid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":57,"kind":1024,"name":"Environment","url":"interfaces/applicationrequest.html#environment","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":58,"kind":1024,"name":"FileReferences","url":"interfaces/applicationrequest.html#filereferences","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":59,"kind":1024,"name":"UserFileName","url":"interfaces/applicationrequest.html#userfilename","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":60,"kind":1024,"name":"TargetId","url":"interfaces/applicationrequest.html#targetid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":61,"kind":1024,"name":"ExecutionSerial","url":"interfaces/applicationrequest.html#executionserial","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":62,"kind":1024,"name":"Encryption","url":"interfaces/applicationrequest.html#encryption","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":63,"kind":1024,"name":"EncryptionMethod","url":"interfaces/applicationrequest.html#encryptionmethod","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":64,"kind":1024,"name":"Compression","url":"interfaces/applicationrequest.html#compression","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":65,"kind":1024,"name":"CompressionMethod","url":"interfaces/applicationrequest.html#compressionmethod","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":66,"kind":1024,"name":"AmountTotal","url":"interfaces/applicationrequest.html#amounttotal","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":67,"kind":1024,"name":"TransactionCount","url":"interfaces/applicationrequest.html#transactioncount","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":68,"kind":1024,"name":"SoftwareId","url":"interfaces/applicationrequest.html#softwareid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":69,"kind":1024,"name":"CustomerExtension","url":"interfaces/applicationrequest.html#customerextension","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":70,"kind":1024,"name":"FileType","url":"interfaces/applicationrequest.html#filetype","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":71,"kind":1024,"name":"Content","url":"interfaces/applicationrequest.html#content","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ApplicationRequest"},{"id":72,"kind":256,"name":"ResponseHeader","url":"interfaces/responseheader.html","classes":"tsd-kind-interface"},{"id":73,"kind":1024,"name":"SenderId","url":"interfaces/responseheader.html#senderid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ResponseHeader"},{"id":74,"kind":1024,"name":"RequestId","url":"interfaces/responseheader.html#requestid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ResponseHeader"},{"id":75,"kind":1024,"name":"Timestamp","url":"interfaces/responseheader.html#timestamp","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ResponseHeader"},{"id":76,"kind":1024,"name":"ResponseCode","url":"interfaces/responseheader.html#responsecode","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ResponseHeader"},{"id":77,"kind":1024,"name":"ResponseText","url":"interfaces/responseheader.html#responsetext","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ResponseHeader"},{"id":78,"kind":4,"name":"Environment","url":"enums/environment.html","classes":"tsd-kind-enum"},{"id":79,"kind":16,"name":"PRODUCTION","url":"enums/environment.html#production","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"Environment"},{"id":80,"kind":16,"name":"TEST","url":"enums/environment.html#test","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"Environment"},{"id":81,"kind":256,"name":"GetFileListOptions","url":"interfaces/getfilelistoptions.html","classes":"tsd-kind-interface"},{"id":82,"kind":1024,"name":"StartDate","url":"interfaces/getfilelistoptions.html#startdate","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"GetFileListOptions"},{"id":83,"kind":1024,"name":"EndDate","url":"interfaces/getfilelistoptions.html#enddate","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"GetFileListOptions"},{"id":84,"kind":1024,"name":"Status","url":"interfaces/getfilelistoptions.html#status","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"GetFileListOptions"},{"id":85,"kind":1024,"name":"FileType","url":"interfaces/getfilelistoptions.html#filetype","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"GetFileListOptions"},{"id":86,"kind":256,"name":"CertService","url":"interfaces/certservice.html","classes":"tsd-kind-interface"},{"id":87,"kind":2048,"name":"getRootCA","url":"interfaces/certservice.html#getrootca","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"CertService"},{"id":88,"kind":2048,"name":"addIntermediaryCertificates","url":"interfaces/certservice.html#addintermediarycertificates","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"CertService"},{"id":89,"kind":128,"name":"Client","url":"classes/client.html","classes":"tsd-kind-class"},{"id":90,"kind":1024,"name":"username","url":"classes/client.html#username","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Client"},{"id":91,"kind":1024,"name":"key","url":"classes/client.html#key","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Client"},{"id":92,"kind":1024,"name":"language","url":"classes/client.html#language","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Client"},{"id":93,"kind":1024,"name":"bic","url":"classes/client.html#bic","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Client"},{"id":94,"kind":1024,"name":"endpoint","url":"classes/client.html#endpoint","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Client"},{"id":95,"kind":1024,"name":"environment","url":"classes/client.html#environment","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Client"},{"id":96,"kind":1024,"name":"trustStore","url":"classes/client.html#truststore","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Client"},{"id":97,"kind":512,"name":"constructor","url":"classes/client.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"Client"},{"id":98,"kind":2048,"name":"getFileList","url":"classes/client.html#getfilelist","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Client"},{"id":99,"kind":2048,"name":"getFile","url":"classes/client.html#getfile","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Client"},{"id":100,"kind":2048,"name":"makeRequest","url":"classes/client.html#makerequest","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Client"},{"id":101,"kind":2048,"name":"signApplicationRequest","url":"classes/client.html#signapplicationrequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"Client"},{"id":102,"kind":2048,"name":"verifyRequestCallback","url":"classes/client.html#verifyrequestcallback","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Client"},{"id":103,"kind":2048,"name":"formatTime","url":"classes/client.html#formattime","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Client"},{"id":104,"kind":2048,"name":"addMinutes","url":"classes/client.html#addminutes","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Client"},{"id":105,"kind":2048,"name":"requestId","url":"classes/client.html#requestid","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Client"},{"id":106,"kind":2048,"name":"makeSoapRequest","url":"classes/client.html#makesoaprequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Client"},{"id":107,"kind":32,"name":"VERSION_STRING","url":"globals.html#version_string","classes":"tsd-kind-variable"},{"id":108,"kind":4194304,"name":"Language","url":"globals.html#language","classes":"tsd-kind-type-alias"},{"id":109,"kind":4194304,"name":"ParsePreprocess","url":"globals.html#parsepreprocess","classes":"tsd-kind-type-alias"},{"id":110,"kind":65536,"name":"__type","url":"globals.html#parsepreprocess.__type","classes":"tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported","parent":"ParsePreprocess"},{"id":111,"kind":64,"name":"parseResponseHeader","url":"globals.html#parseresponseheader","classes":"tsd-kind-function"},{"id":112,"kind":64,"name":"parseApplicationResponse","url":"globals.html#parseapplicationresponse","classes":"tsd-kind-function"},{"id":113,"kind":64,"name":"verifyApplicationRequestSignature","url":"globals.html#verifyapplicationrequestsignature","classes":"tsd-kind-function"},{"id":114,"kind":32,"name":"OPPohjola","url":"globals.html#oppohjola","classes":"tsd-kind-variable"},{"id":115,"kind":32,"name":"OPPohjolaTest","url":"globals.html#oppohjolatest","classes":"tsd-kind-variable"},{"id":116,"kind":128,"name":"OsuuspankkiCertService","url":"classes/osuuspankkicertservice.html","classes":"tsd-kind-class"},{"id":117,"kind":1024,"name":"username","url":"classes/osuuspankkicertservice.html#username","classes":"tsd-kind-property tsd-parent-kind-class","parent":"OsuuspankkiCertService"},{"id":118,"kind":1024,"name":"environment","url":"classes/osuuspankkicertservice.html#environment","classes":"tsd-kind-property tsd-parent-kind-class","parent":"OsuuspankkiCertService"},{"id":119,"kind":512,"name":"constructor","url":"classes/osuuspankkicertservice.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"OsuuspankkiCertService"},{"id":120,"kind":2048,"name":"getEndpoint","url":"classes/osuuspankkicertservice.html#getendpoint","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-static","parent":"OsuuspankkiCertService"},{"id":121,"kind":2048,"name":"getRootCA","url":"classes/osuuspankkicertservice.html#getrootca","classes":"tsd-kind-method tsd-parent-kind-class","parent":"OsuuspankkiCertService"},{"id":122,"kind":2048,"name":"addIntermediaryCertificates","url":"classes/osuuspankkicertservice.html#addintermediarycertificates","classes":"tsd-kind-method tsd-parent-kind-class","parent":"OsuuspankkiCertService"},{"id":123,"kind":2048,"name":"formatTime","url":"classes/osuuspankkicertservice.html#formattime","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"OsuuspankkiCertService"},{"id":124,"kind":2048,"name":"addMinutes","url":"classes/osuuspankkicertservice.html#addminutes","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"OsuuspankkiCertService"},{"id":125,"kind":2048,"name":"requestId","url":"classes/osuuspankkicertservice.html#requestid","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"OsuuspankkiCertService"},{"id":126,"kind":2048,"name":"makeSoapRequest","url":"classes/osuuspankkicertservice.html#makesoaprequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"OsuuspankkiCertService"},{"id":127,"kind":128,"name":"Osuuspankki","url":"classes/osuuspankki.html","classes":"tsd-kind-class"},{"id":128,"kind":1024,"name":"certService","url":"classes/osuuspankki.html#certservice","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Osuuspankki"},{"id":129,"kind":512,"name":"constructor","url":"classes/osuuspankki.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-overwrite","parent":"Osuuspankki"},{"id":130,"kind":2048,"name":"getEndpoint","url":"classes/osuuspankki.html#getendpoint","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private tsd-is-static","parent":"Osuuspankki"},{"id":131,"kind":2048,"name":"getCertificate","url":"classes/osuuspankki.html#getcertificate","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Osuuspankki"},{"id":132,"kind":1024,"name":"username","url":"classes/osuuspankki.html#username","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":133,"kind":1024,"name":"key","url":"classes/osuuspankki.html#key","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":134,"kind":1024,"name":"language","url":"classes/osuuspankki.html#language","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":135,"kind":1024,"name":"bic","url":"classes/osuuspankki.html#bic","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":136,"kind":1024,"name":"endpoint","url":"classes/osuuspankki.html#endpoint","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":137,"kind":1024,"name":"environment","url":"classes/osuuspankki.html#environment","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":138,"kind":1024,"name":"trustStore","url":"classes/osuuspankki.html#truststore","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":139,"kind":2048,"name":"getFileList","url":"classes/osuuspankki.html#getfilelist","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":140,"kind":2048,"name":"getFile","url":"classes/osuuspankki.html#getfile","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":141,"kind":2048,"name":"makeRequest","url":"classes/osuuspankki.html#makerequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":142,"kind":2048,"name":"signApplicationRequest","url":"classes/osuuspankki.html#signapplicationrequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"Osuuspankki"},{"id":143,"kind":2048,"name":"verifyRequestCallback","url":"classes/osuuspankki.html#verifyrequestcallback","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":144,"kind":2048,"name":"formatTime","url":"classes/osuuspankki.html#formattime","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":145,"kind":2048,"name":"addMinutes","url":"classes/osuuspankki.html#addminutes","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":146,"kind":2048,"name":"requestId","url":"classes/osuuspankki.html#requestid","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"},{"id":147,"kind":2048,"name":"makeSoapRequest","url":"classes/osuuspankki.html#makesoaprequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"Osuuspankki"}]};