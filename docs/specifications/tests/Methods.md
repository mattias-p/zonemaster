# Methods common to Test Case Specifications

This is a list of generic methods used in many test case specifications. The
test cases that makes use of any of these methods should link directly to
this text.


## Method 1: Parent zone

Obtain the parent zone of the given domain (zone).

1. The given domain is assumed to be apex of a zone with the same
   name, and is here refered to as the _child zone_.
1. A recursive lookup for the SOA record of the child domain name starting from the
   root zone is done, and the steps of the process are recorded.
2. If the lookup reaches a name server that responds with a redirect (delegation)
   directly to the requested child zone the test
   succeeds. The zone in which the delegation was found is
   considered to be the parent zone.  
3. If the recursive lookup reaches a name server that authoritatively responds
   with NXDOMAIN for the child domain (child zone), the test succeeds. The zone
   returning NXDOMAIN is considered to be the parent zone.
4. If the recursive lookup reaches authorititative NOERROR answer, with or with
   record in the answer section, the test failed.


## Method 2: Delegation name servers

Obtain the name servers (NS records) for the given zone as defined in
its delegation from the parent zone.

1. Obtain parent zone using Method 1.
2. Send an SOA query for the given domain name (zone) to one of the authoritative
   name servers for the parent zone.
3. Record all NS records in the authority section and return in the response.
4. Save all A and AAAA records in the additional section in a cache that
   method 4 can use.


## Method 3: In-zone name servers

Obtain the authoritative name servers for the given zone as defined in
the zone itself.

1. Obtain name servers using Method 2.
2. Look up addresses for all obtained name servers that are
   out-of-bailiwick.
3. Send an NS query for the given domain to all obtained name servers.
4. Record all the unique NS records in the answer sections of the
   responses in step 3, as well as all unique glue records.


## Method 4: Delegation name server addresses

Obtain the addresses of the authoritative name servers for the given
zone as defined in the delegation from the parent zone.

1. Input data are the NS records obtained from method 2.
2. For all in-bailiwich name servers, find the matching A and AAAA
   records in the cache created by method 2. For in-bailiwick name
   servers, recursive lookup must not be done.
3. For all out-of-bailiwich name servers, first look in the cache
   created by mothod 2. If any name server does not have both A and
   AAAA records, then do a recursive lookup for those.
4. Return a stucture where name server name is connected to its
   address or addresses. If a name server does not have any, that
   name server must be returned with a empty address field.


## Method 5: In-zone NS addresses

Obtain the addresses of the authoritative name servers for the given
zone as defined in the zone itself.

1. Send an A query to all name servers obtained in Method 3.
2. Record the list of unique IPv4 addreses in the answer section.
3. Send an AAAA query to all name servers obtained in Method 3.
4. Record the list of unique IPv6 addresses in the answer section.

-------

Copyright (c) 2013, 2014, 2015, IIS (The Internet Infrastructure Foundation)  
Copyright (c) 2013, 2014, 2015, AFNIC  
Creative Commons Attribution 4.0 International License

You should have received a copy of the license along with this
work.  If not, see <https://creativecommons.org/licenses/by/4.0/>.
