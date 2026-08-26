import http.server
import socketserver
import os
import sys

PORT = 5500
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

class ThreadingHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    with ThreadingHTTPServer(('127.0.0.1', PORT), Handler) as httpd:
        print(f"Serving at http://127.0.0.1:{PORT}", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            httpd.server_close()
