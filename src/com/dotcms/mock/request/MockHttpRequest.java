package com.dotcms.mock.request;

import javax.servlet.http.HttpServletRequest;

import org.mockito.Mockito;


/**
 * 
 * Mocks a full featured request to a specific host / resource
 *
 */
public class MockHttpRequest implements MockRequest {

    private final HttpServletRequest request;

    public MockHttpRequest(final String hostname, final String uri) {
        HttpServletRequest mockReq = new BaseRequest().request();
        Mockito.when(mockReq.getRequestURI()).thenReturn(uri);
        Mockito.when(mockReq.getRequestURL()).thenReturn(new StringBuffer("http://" + hostname + uri));
        Mockito.when(mockReq.getServerName()).thenReturn(hostname);
        Mockito.when(mockReq.getRemoteAddr()).thenReturn("127.0.0.1");
        Mockito.when(mockReq.getRemoteHost()).thenReturn("127.0.0.1");
        request = new MockHeaderRequest(new MockSessionRequest(new MockAttributeRequest(mockReq)));
    }

    @Override
    public HttpServletRequest request() {

        return request;
    }



}
