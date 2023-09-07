package com.pratham.wellsfargo;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
public class Main {

	public static void main(String[] args) {
		
		Connection connection = null;
		String url = "jdbc:mariadb://localhost:3306/mysql";
		String user = "root";
		String pwd = "password";
		
		try {
			connection = DriverManager.getConnection(url,user,pwd);
			}catch(SQLException e) {
				e.printStackTrace();
			}
		
		System.out.println("Success");
		
	}
}
