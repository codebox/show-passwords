function pwshow(){
	var i,n,ip=document.getElementsByTagName('input'),errs=[];
	for(i in ip){
		n=ip[i];
		if(n.type && n.type.toLowerCase()==='password'){
			if(n.value){
				try{
					n.type='text';
				} catch(e) {
					// IE disallows this type of shenanigans
					errs.push(n.value);
				}
			}
		}
	}
	if (errs.length){
		var txt=errs.join('\n');
		alert('The following passwords were found:\n' + txt);	
	}
}