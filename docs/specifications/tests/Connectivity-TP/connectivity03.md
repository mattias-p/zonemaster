## CONNECTIVITY03: AS Diversity

### Test case identifier

**CONNECTIVITY03:** AS Diversity

### Objective

[RFC 2182](https://tools.ietf.org/html/rfc2182), section 3.1
clearly specifies that distinct authoritative name servers for a child
domain should be placed in different topological and geographical locations.
The objective is to minimise the likelihood of a single failure disabling
all of them. 

The objective in this test is to check that all IP addresses of the domain's
authoritative name servers does not belong to the same AS.

[missing references to AS numbers, RFC 1930?]

### Inputs

 * The domain name to be tested.
 * A list of ASN lookup domains.


### Ordered description of steps to be taken to execute the test case

 1. Obtain a set of IP addresses using [Method4].
 2. For each IP address:
     1. Reverse the IP address (see [Special procedural requirements]).
     2. Construct a domain name by joining the reversed IP address with
        one of the ASN lookup domains.
     3. Construct a TXT query for the domain name.
     4. Send the query to the public DNS.
     5. If a reponse is received with a TXT record in the ANSWER section:
         1. Take not of the AS number from the TXT record, and whether
            the IP address is an IPv4 or IPv6 address.


### Outcome(s)

The outcome of this test case is the severity of the most severe log
message emitted during its execution.

| Log message identifier                     | Description                                 |
|:-------------------------------------------|:--------------------------------------------|
| CONNECTIVITY:NAMESERVERS_IPV4_WITH_UNIQ_AS | All the IPv4 addresses were in the same AS. |
| CONNECTIVITY:NAMESERVERS_IPV6_WITH_UNIQ_AS | All the IPv6 addresses were in the same AS. |


### Special procedural requirements

To reverse an IPv4 addresses:
 1. Split it into a list of four numbers.
 2. Rerverse the list.
 3. Join the list into a string with dots between the elements.

To reverse an IPv6 addresses:
 1. Split it into a list of eight 4-hexdigit numbers.
 2. Reverse the list.
 3. Join the list into a string with dots between the elements.


### Intercase dependencies

None

-------

[Method4]: ../Methods.md#method-4-delegation-name-server-addresses
[Special procedural requirements]: #special-procedural-requirements

Copyright (c) 2013, 2014, 2015, IIS (The Internet Infrastructure Foundation)  
Copyright (c) 2013, 2014, 2015, AFNIC  
Creative Commons Attribution 4.0 International License

You should have received a copy of the license along with this
work.  If not, see <https://creativecommons.org/licenses/by/4.0/>.
