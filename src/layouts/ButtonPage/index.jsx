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
            <Button startIcon="add_shopping_cart" color="primary">Default</Button>
          </div>
          <div className="button-page__group__content">
            <p className="button-text">&lt;Button endIcon=”add_shopping_cart” /&gt;</p>
            <Button endIcon="add_shopping_cart" color="primary">Default</Button>
          </div>
        </div>
      </section>
    );
}
