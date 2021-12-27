# Megaphone SDK

The Megaphone SDK includes a component to easily display banners and announcements within your app.

In order to use the Megaphone SDK, register for an account at [megaphonesdk.com](https://megaphonesdk.com)

## Installation

In your project directory, run:

```
$ npm install megaphone-sdk
```

## Usage

To use the Megaphone component, first import it from the package. 

```
import Widget from 'megaphone-sdk/Widget'
```

When used, the Megaphone widget must have an `accountId` prop that matches your Megaphone accountId. This is what is used to load notifications and announcements from your account. 

```
import React from 'react';
import Widget from 'megaphone-sdk/Widget';

function App() {
  return (
    <div>
      <Widget accountId="...">
      {
        ...
      }
    </div>
  );
}

export default App;
```

## Creating Announcements

Once you have installed the widget, you can create and manage your announcements and banners from the [Megaphone App](https://app.megaphonesdk.com). Any banner you create will automatically be displayed by the widget. 