import React from 'react';

class SampleWork extends React.Component {
  render() {
    return (
<section class="section section--alignCentered section--description">
      {this.props.work.map((myWork, idx) => {
          return (
            <SampleWorkComp myWork={myWork} key={idx}/>
          )
        })
      }
      </section>
    )
  }
}

class SampleWorkComp extends React.Component {
  render() {
    let myWork = this.props.myWork;
    return (
      <div className="section__sampleWrapper">
        <div className="section__sample">
          <img alt={myWork.image.desc}
               className="section__sampleImage"
               src={myWork.image.src}/>
          <dl className="color--black">
            <dt className="section__sampleTitle section__text--centered">
                {myWork.title}
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}
export default SampleWork;
