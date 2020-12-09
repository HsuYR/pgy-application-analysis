function inject() {
  let table_iframe = document.getElementById('Iframe1').contentDocument
	let total_application = 0, total_allocation = 0;
  for (i=2; i<41; i++) {
    let application_span = table_iframe.getElementById(`gvDetailList_ctl${i<10?'0'+i.toString():i}_lblExamProcessCount`);
		let allocation_span = table_iframe.getElementById(`gvDetailList_ctl${i<10?'0'+i.toString():i}_lblOccupation`);
		let application = Number(application_span.textContent.split('/')[0].trim());
    let allocation = Number(allocation_span.textContent);
    let ratio = application/allocation;
		total_application += application;
    total_allocation += allocation;
		application_span.textContent = `${application} / ${ ratio.toFixed(2) }`;
  }
	table_iframe.querySelector('#gvDetailList th').textContent = `${table_iframe.querySelector('#gvDetailList a').textContent.split('/')[0].trim()} / Total Application ${total_application} Avg ${(total_application/total_allocation).toFixed(2)}`;
}
inject();
