import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken() {
    return 'Live';
  },
  columns: [
    {
      propertyName: 'id',
      title: 'ID'
    },
    {
      propertyName: 'firstName',
      title: 'First Name'
    },
    {
      propertyName: 'lastName',
      title: 'Last Name'
    },
    {
      propertyName: 'city',
      title: 'City'
    }
  ]
});
