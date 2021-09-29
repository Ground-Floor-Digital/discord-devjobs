import { WebApp } from 'meteor/webapp';
import { Meteor } from 'meteor/meteor';

import '../imports/ui/App';

Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: 'en' }));
});
