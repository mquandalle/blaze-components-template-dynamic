if (Meteor.isClient) {
  BlazeComponent.extendComponent({
    template: function() {
      return 'component';
    }
  }).register('component');
}
