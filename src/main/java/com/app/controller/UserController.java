package com.app.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.request.UserDetailsRequestModel;
import com.app.model.response.UserRest;
import com.app.service.UserService;
import com.app.shared.dto.UserDto;

@RestController
@RequestMapping("users")
@PreAuthorize("hasRole('USER')")
//@CrossOrigin("http://localhost:8080")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping
	public String getUser() {
		return "get called!";
	}

	@PostMapping
	public UserRest createUser(@RequestBody UserDetailsRequestModel userDetails) {
		UserRest returnValue = new UserRest();

		if (userDetails.getFirstName().isEmpty())
			throw new NullPointerException("This object is null");

		UserDto userDto = new UserDto();
		BeanUtils.copyProperties(userDetails, userDto);

		UserDto createUser = userService.createUser(userDto);
		BeanUtils.copyProperties(createUser, returnValue);

		return returnValue;
	}

	@PutMapping
	public String updateUser() {
		return "update called!";
	}

	@DeleteMapping
	public String deleteUser() {
		return "delete called!";
	}
}
