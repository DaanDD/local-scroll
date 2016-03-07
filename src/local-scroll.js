class LocalScroll {
  constructor(options = {}) {
    this.options = Object.assign({
      selector: "[data-scroll]",
      offset: 0,
      duration: 400
    }, options);
    this.addClickHandlers();
  }

  addClickHandlers() {
    $(this.options.selector).on('click', (e) => {
      e.preventDefault();
      const href = $(e.target).attr('href');

      if(href === '#') {
        return this.scrollTo(0);
      } else {
        const scrollToElem = $(href);
        return scrollToElem.length && this.scrollTo(scrollToElem.offset().top);
      }
    });
  }

  scrollTo(scrollY) {
    $('html, body').animate({
      scrollTop: scrollY + this.options.offset
    }, this.options.duration);
  }
}

export default LocalScroll
