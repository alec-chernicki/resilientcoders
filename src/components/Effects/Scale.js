/* eslint-disable */
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Scale extends React.Component {
 componentWillMount() {
   this.controller = new ScrollMagic.Controller();
 }
 componentDidMount() {
   if (!this.triggerElement || !this.targetElement) {
     return
   }

   const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElement, 1, {
       scaleX: this.props.from,
       scaleY: this.props.from,
     }, {
       scaleX: this.props.to,
       scaleY: this.props.to,
       ease: Power1.easeOut
     })]);

   this.scene = new ScrollMagic
     .Scene({duration: '100%', offset: 0, triggerHook: 0})
     .setTween(tween)
     .addTo(this.controller)
     .triggerElement(this.triggerElement)
 }
 componentWillUnmount() {
   this.scene.destroy(true)
   this.scene = null;
 }
 getWindowHeight() {
   return window.innerWidth
 }
 setTriggerElementRef(element) {
   this.triggerElement = element;
 }
 setTargetElementRef(element) {
   this.targetElement = element;
 }
 render() {
   const className = classNames('stretch-to-fit', this.props.className);

   return (
     <div
       ref={this.setTriggerElementRef.bind(this)}
       className="stretch-to-fit"
     >
       <div
         className={className}
         ref={this.setTargetElementRef.bind(this)}
       >
         {this.props.children}
       </div>
     </div>
   )
 }
}

export default Scale;
