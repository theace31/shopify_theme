$(function(){function e(e){var t=document.getElementById(e.data.element),n="";if(document.body.createTextRange)n=document.body.createTextRange(),n.moveToElementText(t),n.select();else if(window.getSelection){var i=window.getSelection();n=document.createRange(),n.selectNodeContents(t),i.removeAllRanges(),i.addRange(n)}}var t={qrCode:"#QrCode",printButton:"#PrintGiftCard",giftCardCode:"#GiftCardDigits"},n=$(t.qrCode);new QRCode(n[0],{text:n.attr("data-identifier"),width:120,height:120}),$(t.printButton).on("click",function(){window.print()}),$(t.giftCardCode).on("click",{element:"GiftCardDigits"},e)});