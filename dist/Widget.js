import React, { useState, useEffect } from 'react';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import axios from 'axios';
import "./Widget.scoped.css?scopeId=86b2940c";

const Widget = ({
  accountId
}) => {
  const [show, setShow] = useState(true);
  const [announcement, setAnnouncement] = useState(null);
  console.log('accountId', accountId);
  useEffect(() => {
    const getAnnouncement = async () => {
      console.log('getting announcement'); //const baseURL = process.env.REACT_APP_FUNCTIONS_BASE_URL

      const {
        data
      } = await axios.get(`https://us-central1-megaphone-widget.cloudfunctions.net/announcements-getAnnouncement`, {
        params: {
          accountId: accountId
        }
      });
      setAnnouncement(data);
    };

    getAnnouncement();
  }, [accountId]);
  console.log('announcement', announcement);

  if (show && announcement) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mp-bg-indigo-600 mp-mx-0 mp-my-0",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "mp-max-w-7xl mp-mx-auto mp-py-3 mp-px-3 sm:mp-px-6 lg:mp-px-8",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "mp-flex mp-items-center mp-justify-between mp-flex-wrap",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "mp-w-0 mp-flex-1 mp-flex mp-items-center",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement("span", {
      className: "mp-flex mp-p-2 mp-rounded-lg mp-bg-indigo-800",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement(SpeakerphoneIcon, {
      className: "mp-h-6 mp-w-6 mp-text-white",
      "aria-hidden": "true",
      "data-v-86b2940c": ""
    })), /*#__PURE__*/React.createElement("p", {
      className: "mp-ml-3 mp-font-medium mp-text-white mp-truncate",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement("span", {
      className: "md:inline",
      "data-v-86b2940c": ""
    }, announcement.text))), /*#__PURE__*/React.createElement("div", {
      className: "mp-order-3 mp-mt-2 mp-flex-shrink-0 mp-w-full sm:mp-order-2 sm:mp-mt-0 sm:mp-w-auto",
      "data-v-86b2940c": ""
    }, announcement.linkUrl ? /*#__PURE__*/React.createElement("a", {
      href: announcement.linkUrl,
      target: "_blank",
      rel: "noreferrer",
      className: "mp-no-underline mp-normal-case mp-flex mp-items-center mp-justify-center mp-px-4 mp-py-2 mp-border mp-border-transparent mp-rounded-md mp-shadow-sm mp-text-sm mp-font-medium mp-text-indigo-600 mp-bg-white hover:mp-bg-indigo-50",
      "data-v-86b2940c": ""
    }, "More") : null), /*#__PURE__*/React.createElement("div", {
      className: "mp-order-2 mp-flex-shrink-0 sm:mp-order-3 sm:mp-ml-3",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setShow(false),
      className: "mp-border-0 mp-outline-0 mp-normal-case mp-bg-transparent mp--mr-1 mp-flex mp-p-2 mp-rounded-md hover:mp-bg-indigo-500 focus:mp-outline-none focus:mp-ring-2 focus:mp-ring-white sm:mp--mr-2",
      "data-v-86b2940c": ""
    }, /*#__PURE__*/React.createElement("span", {
      className: "mp-sr-only",
      "data-v-86b2940c": ""
    }, "Dismiss"), /*#__PURE__*/React.createElement(XIcon, {
      className: "mp-h-6 mp-w-6 mp-text-white",
      "aria-hidden": "true",
      "data-v-86b2940c": ""
    }))))));
  } else return null;
};

export default Widget;