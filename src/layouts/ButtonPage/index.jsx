import Button from 'components/Button';
import React from 'react'

export default function ButtonPage() {
    return (
      <section className="button-page">
        <h1 className="button-page__title">Buttons</h1>
        <div className="button-page__group btn-variant">
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button /&gt;</p>
            <Button>Default</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text button-text__hover">&:hover, &:focus</p>
            <Button className="btn-hover">Default</Button>
          </div>
        </div>

        <div className="button-page__group btn-variant">
          <div className="button-page__group__content ">
            <p className="button-text">&lt;Button variant=”outline” /&gt;</p>
            <Button variant="outline">Default</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text button-text__hover">&:hover, &:focus</p>
            <Button variant="outline" className="btn-hover">
              Default
            </Button>
          </div>
        </div>

        <div className="button-page__group btn-variant">
          <div className="button-page__group__content ">
            <p className="button-text text">&lt;Button variant=”text” /&gt;</p>
            <Button variant="text">Default</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text button-text__hover">&:hover, &:focus</p>
            <Button variant="text" className="btn-hover">
              Default
            </Button>
          </div>
        </div>

        <div className="button-page__group btn-variant">
          <div className="button-page__group__content ">
            <p className="button-text">&lt;Button disableShadow /&gt;</p>
            <Button disableShadow color="primary">
              Default
            </Button>
          </div>
        </div>

        <div className="button-page__group btn-disabled">
          <div className="button-page__group__content ">
            <p className="button-text">&lt;Button disabled /&gt;</p>
            <Button disabled>Disabled</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text text">&lt;Button variant=”text” disabled /&gt;</p>
            <Button variant="text" disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className="button-page__group btn-icon-area">
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button startIcon=”add_shopping_cart” /&gt;</p>
            <Button startIcon="add_shopping_cart" color="primary">
              Default
            </Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button endIcon=”add_shopping_cart” /&gt;</p>
            <Button endIcon="add_shopping_cart" color="primary">
              Default
            </Button>
          </div>
        </div>

        <div className="button-page__group btn-size-area">
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button size=”sm” /&gt;</p>
            <Button color="primary" size="sm">
              Default
            </Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button size=”md” /&gt;</p>
            <Button color="primary" size="md">
              Default
            </Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button size=”lg” /&gt;</p>
            <Button color="primary" size="lg">
              Default
            </Button>
          </div>
        </div>

        <div className="button-page__group btn-color-area">
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button color="default" /&gt;</p>
            <Button color="default">Default</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button color="primary" /&gt;</p>
            <Button color="primary">Default</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button color="secondary" /&gt;</p>
            <Button color="secondary">Default</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button color="danger"/&gt;</p>
            <Button color="danger">Default</Button>
          </div>
        </div>

        <div className="button-page__group btn-color-area">
          <div className="button-page__group__content">
            <p className="button-text button-text__hover">&:hover, &:focus</p>
            <Button color="default" className="btn-hover">Default</Button>
          </div>
          <div className="button-page__group__content btn-color-hover">
            <Button color="primary" className="btn-hover">Default</Button>
          </div>
          <div className="button-page__group__content btn-color-hover">
            <Button color="secondary" className="btn-hover">Default</Button>
          </div>
          <div className="button-page__group__content btn-color-hover">
            <Button color="danger" className="btn-hover">Default</Button>
          </div>
        </div>

        <p className="attribution">
          created by <a href="https://github.com/arrizkyhp/" target="_blank" rel="noreferrer"><b>arrizkyhp</b></a> - devChallenges.io
        </p>
      </section>
    );
}
