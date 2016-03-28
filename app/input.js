VK.init({
   apiId: 5276382
});
function RemotePosting(response) {
   VK.Api.call('wall.post', {owner_id:'-37413577', message: $("#txt").val()}, function(r) {});
}