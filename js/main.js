// var imgLoad = imagesLoaded( elem );
// function onAlways( instance ) {
//   console.log('all images are loaded');
// }
// // bind with .on()
// imgLoad.on( 'always', onAlways );
// // unbind with .off()
// imgLoad.off( 'always', onAlways );

const init = () => {
		imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
		DOM.enter.addEventListener('click', navigate);
		DOM.enter.addEventListener('touchenter', navigate);
		DOM.enter.addEventListener('mouseenter', enterHoverInFn);
		DOM.enter.addEventListener('mouseleave', enterHoverOutFn);
	};

	let loaded;
	const navigate = () => {
		if ( loaded ) return;
		loaded = true;
};
