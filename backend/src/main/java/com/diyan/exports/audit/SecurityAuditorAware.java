package com.diyan.exports.audit;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class SecurityAuditorAware implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor() {
        // Return a default system user for the MVP since security is deferred
        return Optional.of("SYSTEM_USER");
    }
}
