package com.app.exception;

public class UserServiceException extends RuntimeException{

	private static final long serialVersionUID = 2002656120920610284L;
	
	public UserServiceException(String message){
		super(message);
	}
	
}
