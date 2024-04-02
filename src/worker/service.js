
class Service extends CacheController
{
	constructor(prefix, files = [])
	{
		super(prefix);
		this.files = files;

		this.addEvents();
	}

	isDataRequest(url = '')
	{
		return (url.indexOf('/api/') > -1);
	}

	addEvents()
	{
		self.addEventListener('install', (e) =>
		{
			e.waitUntil(
				this.addFiles(this.files)
			);
		});

		self.addEventListener('activate', (e) =>
		{
			e.waitUntil(
				this.refresh()
			);

			return self.clients.claim();
		});

		self.addEventListener('fetch', (e) =>
		{
			if(e.request.mode === 'navigate')
			{
				e.respondWith(caches.match('index.html'));
				return false;
			}

			var response;
			if(this.isDataRequest(e.request.url))
			{
				response = this.fetchData(e);
			}
			else
			{
				response = this.fetchFile(e);
			}

			e.respondWith(response);
		});
	}
}