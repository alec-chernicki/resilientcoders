/* eslint-disable */
import ScrollMagic from 'scrollmagic';
import {Power1} from 'gsap';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
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
   const stretchToFit = {
     'stretch-to-fit': !!this.props.stretch
   }
   const outerClassName = classNames(stretchToFit)
   const innerClassName = classNames(this.props.className, stretchToFit);

   return (
     <div
       ref={this.setTriggerElementRef.bind(this)}
       className={outerClassName}
     >
       <div
         className={innerClassName}
         ref={this.setTargetElementRef.bind(this)}
       >
         {this.props.children}
       </div>
     </div>
   )
 }
}

export default Scale;
