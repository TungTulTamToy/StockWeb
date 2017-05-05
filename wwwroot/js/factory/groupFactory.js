app.factory("Group", function ($resource) {
    return $resource('http://localhost:5200/api/Group/:id', { id: '@id' });
});
